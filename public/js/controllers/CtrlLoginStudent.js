angular.module('app')
.controller('CtrlLoginStudent',['$window','$scope','Auth','localStorageService',CtrlIndex])

function CtrlIndex($window,$scope,Auth,localStorageService){


    
    Auth.verifyAccoount(localStorageService.get('user')) 
    .then(function(response){
        $window.location.href="/search"
    })

	$scope.login= function(user){
        console.log(user)
    	$scope.preload =true;

        Auth.loginStudent(user)
        .then(function(response){
            localStorageService.set('user',response.data);
            $scope.preload =false;
            $window.location.href="/";
        })
        .catch(function(response){
        	$scope.message = response.data.message;
        	$scope.preload =false;
        });
    };


}