angular.module('app')
.controller('CtrlIndex',['$window','$scope','Auth','localStorageService',CtrlIndex])

function CtrlIndex($window,$scope,Auth,localStorageService){
    

    Auth.verifyAccoount(localStorageService.get('user')) 
    .then(function(response){
        $window.location.href="/search"
    })
    


	$scope.loginStudent = function(user,remember){
    	$scope.preloadStudent =true;

        Auth.loginStudent(user)
        .then(function(response){
            localStorageService.set('user',response.data);
            $scope.preloadStudent =false;
            $window.location.href="/search";
        })
        .catch(function(response){
        	$scope.messageStudent = response.data.message;
        	$scope.preloadStudent =false;
        });
    };


    $scope.loginTeacher = function(user,remember){

        $scope.preloadTeacher =true;

        Auth.loginTeacher({
            email: user.email,
            password: user.password
        })
        .then(function(response){
            localStorageService.set('user',response.data);
            $scope.preloadTeacher =false;
        })
        .catch(function(response){
            $scope.messageTeacher = response.data.message;
            $scope.preloadTeacher =false;
        });
    };



}