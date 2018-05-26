angular.module('app')
.controller('CtrlSearch',['$window','$scope','localStorageService','Auth',CtrlSearch])

function CtrlSearch($window,$scope,localStorageService,Auth){

	
	$scope.preload =true;

	Auth.verifyAccoount(localStorageService.get('user')) 
	.then(function(response){
		$scope.user =  localStorageService.get('user');
    })
    .catch(function(response){
    	$scope.user =  undefined;
    });

    $scope.classroomMobil = function (){
    	$window.location.href="classroom-mobil";
    }

    $scope.classroomPc = function (){
    	$window.location.href="classroom"
    }

    $scope.logout = function (){
    	Auth.logoutStudent()
    	.then(function(response){
    		localStorageService.remove('user');
    		$window.location.href="/";
    	})
    }
	

}