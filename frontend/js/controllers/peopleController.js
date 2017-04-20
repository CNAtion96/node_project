(function() {
    'use strict';

    angular
        .module('peopleList')
        .controller('peopleController', function(data) {
            const vm = this;
                let users = data.getUsers();
                users.then(response=>{
                    vm.users = response.data;
                    console.log(vm.users);
                })              

                vm.submitForm = function(valid){
                    if(valid){
                        let user = vm.user;
                        let newUser = Object.assign({}, user);
                        console.log(newUser);
                        let addnewUser = data.addUser(newUser);
                        addnewUser.then(response=>{
                            console.log(response);
                            vm.users = response.data;
                            console.log(vm.users);
                        })
                        vm.user = {};
                    }else{
                        alert("Invalid Form");
                    }
                }

                vm.delete = function(id){
                    let deleteUser = data.deleteUser(id);
                    deleteUser.then(response=>{
                        vm.users = response.data;
                        console.log(vm.users);
                    })
                }
        });
        
})();