const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const user = require('./models/user');

mongoose.connect('mongodb://CNAtion96:Cwim19967@ds013941.mlab.com:13941/user_list');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Get all of people
app.get('/people',function(req,res){
  user.find().exec((err,response)=>{
    if(err) return res.json({err});
    res.json(response);
	})
})

// Get a single person
app.get('/people/:id',function(req,res){
  let id = req.params.id;
  user.find(_id=id).exec((err,response)=>{
   res.json(response);
   if(err) return res.json({err});
 })
  return res.json(onePerson);
})

// Post a new person
app.post('/people',function(req,res){
  let User = new user({"name": req.body.name, "age": req.body.age, "js": req.body.js});
  User.save(err=>{
    if(err) return res.json({err});
    user.find().exec((err,response)=>{
      if(err) res.json({err});
      res.json(response);
    });
  });
})

// Delete a person
app.delete('/people/:id',function(req,res){
  let id = req.params.id;
  user.remove({_id:id}).exec((err)=>{
    if(err) return res.json({err});
    user.find().exec((err,response)=>{
      if(err) return res.json(err);
      res.json(response);
    })
  });
  
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});