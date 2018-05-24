angular.module('app')
.controller('CtrlRegister',['$window','$scope','Auth','localStorageService',CtrlRegister])

function CtrlRegister($window,$scope,Auth,localStorageService){

	$scope.user= {
		sex : "masculino"
	};

	$scope.signupStudent = function(user){
		if(user.password!=user.repPassword) return false;
		Auth.signupStudent(user)
		.then(function(response){
            localStorageService.set('user',response.data);
            $scope.preloadStudent =false;
            $window.location.href="/";
        })
        .catch(function(response){
        	$scope.messageStudent = response.data.message;
        	$scope.preloadStudent =false;
        });

	}

}