"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        required: [true, `I need a name man!`],
        type: String
    },
    age: {
        required: [true, `How old am I!?`],
        type: Number
    },
    js: {
        required: [true, `Do I like JavaScript or not!?`],
        type: String
    },
});

module.exports = mongoose.model('user', userSchema);