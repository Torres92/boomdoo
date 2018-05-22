angular.module('app')
.controller('CtrlIndex',['$scope','Auth','localStorageService',CtrlIndex])

function CtrlIndex($scope,Auth,localStorageService){
    


	$scope.loginStudent = function(user,remember){
    	$scope.preloadStudent =true;

        Auth.loginStudent(user)
        .then(function(response){
            localStorageService.set('student',response.data);
            $scope.preloadStudent =false;
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
            localStorageService.set('teacher',response.data);
            $scope.preloadTeacher =false;
        })
        .catch(function(response){
            $scope.messageTeacher = response.data.message;
            $scope.preloadTeacher =false;
        });
    };



}