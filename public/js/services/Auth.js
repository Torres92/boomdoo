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
			

		},
		signupStudent : function (user){
			var d = $q.defer();

			$http({method:'post',url: '/api/signupStudent',params:user})
			.then(function(response) {
   				d.resolve(response)
  			},function(response) {
    			d.reject(response)
  			});

  			return d.promise;


		},
		signupTeacher : function (user){

			var d = $q.defer();

			$http({method:'post',url: '/api/signupTeacher',params:user})
			.then(function(response) {
   				d.resolve(response)
  			},function(response) {
    			d.reject(response)
  			});

  			return d.promise;


		},verifyAccoount : function (user){
			var d = $q.defer();
			if(user == null){ 
				d.reject('error');
			}else{
				$http({
					method:'get',
					url: '/api/verifyAccount',
					headers: {
      					'Content-Type': 'application/json',
      					Authorization: 'Bearer ' + user.token
   					}
				})
				.then(function(response) {
   					d.resolve(response);
  				},function(response) {
    				d.reject(response);
  				});
			}

  			return d.promise;
		},
		logoutStudent : function (user){
			var d = $q.defer();

			$http({method:'get',url: '/api/logoutStudent'})
			.then(function(response) {
   				d.resolve(response);
  			},function(response) {
    			d.reject(response);
  			});

  			return d.promise;
		}


	}

				
}