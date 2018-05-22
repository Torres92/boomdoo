angular.module('app')
.controller('CtrlLoginStudent',['$scope','Auth','localStorageService',CtrlIndex])

function CtrlIndex($scope,Auth,localStorageService){

	$scope.login= function(user){

    	$scope.preload =true;

        Auth.loginTeacher(user)
        .then(function(response){
            localStorageService.set('user',response.data);
            $scope.preload =false;
        })
        .catch(function(response){
        	$scope.message = response.data.message;
        	$scope.preload =false;
        });
    };


}