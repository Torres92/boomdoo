angular.module('app')
.service('Auth',['$q','$http',Auth]);

function Auth($q,$http){

	return{
		loginStudent : function (user){
			var d = $q.defer();

			$http({method:'post',url: '/api/loginStudent',params:user})
			.then(function(response) {
   				d.resolve(response)
  			},function(response) {
    			d.reject(response)
  			});

  			return d.promise;


		},
		loginTeacher : function (user){
			var d = $q.defer();

			$http({method:'post',url: '/api/loginTeacher',params:user})
			.then(function(response) {
   				d.resolve(response)
  			},function(response) {
    			d.reject(response)
  			});

  			return d.promise;
			

		}

	}

	

}