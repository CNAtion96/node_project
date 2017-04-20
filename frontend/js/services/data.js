(function() {
    'use strict';

    angular
        .module('peopleList')
        .factory('data', function($http){

            return{
                getUsers:() => {
                    return $http ({
                        method: "GET",
                        url: `http://localhost:8080/people`,
                    })
                },

                getUser:(id) => {
                    return $http ({
                        method:"GET",
                        url:`http://localhost:8080/people/${id}`
                    })
                },

                addUser:(data)=>{
                    return $http({
                        method:"POST",
                        data:data,
                        url: `http://localhost:8080/people`
                    })
                },

                deleteUser:(id)=>{
                    return $http({
                        method:"DELETE",
                        url:`http://localhost:8080/people/${id}`
                    })
                }
            }

         });
        
})();