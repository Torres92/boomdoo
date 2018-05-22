angular.module('app')
.controller('CtrlRegister',['$scope','Auth',CtrlRegister])

function CtrlRegister($scope,Auth){

	$scope.user= {
		sex : "masculino"
	};

	$scope.signupStudent = function(user){
		console.log(user)
	}

}