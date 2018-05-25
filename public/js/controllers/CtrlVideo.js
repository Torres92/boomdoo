angular.module('app')
.controller('CtrlClassroom',['$scope','notify',CtrlClassroom])

function CtrlClassroom($scope,notify){

	$scope.messages = [];
	$scope.countmsm = 0;

	$scope.option ={
		mic : true,
		cam : true
	};

	var webrtc = new SimpleWebRTC({
				localVideoEl: 'localVideo',//instancia mi camara local;
				remoteVideosEl: 'remoteVideo',
				media: { audio: true, video: true},
  				autoRequestMedia: true,//inicia mi camara de manera autimatica

			});


	webrtc.on('readyToCall', function () {		
  		// conectar la video llamada a la sala
  		webrtc.joinRoom('id');
	});



	webrtc.connection.on('message', (data) => {
  		if (data.type === 'chat') {
    		const payload = data.payload;
    		$scope.$apply(function (){
    			$scope.messages.push({
    				time: new Date(),
					msm : payload.msm,
					class :'li-respuesta'
    			});

    			if($scope.chatclass) return;
    			$scope.countmsm++;
    			notify({ 
	 				message:payload.name + ' : ' + payload.msm,
	 				position : 'left'
	 			});
    		})
    	}
    })
	
	$scope.mute = function (){
		webrtc.mute();
		$scope.option.mic = false;
	}
	$scope.unmute = function (){
		webrtc.unmute();
		$scope.option.mic = true;
	}

	$scope.pauseVideo = function (){
		webrtc.pauseVideo();
		$scope.option.cam = false;

	}

	$scope.resumeVideo = function (){
		webrtc.resumeVideo();
		$scope.option.cam = true;
	}

	$scope.sendMessage = function (msm){
		if(msm == undefined) return;

		$scope.messages.push({
			time: new Date(),
			msm : msm,
			class :'li-mensaje'
		})
		webrtc.sendToAll('chat',{
			msm : msm,
			name : 'nick'
		});

		$scope.textsend = undefined;
	}

	

	
	$scope.openNav = function (){
		$scope.countmsm=0;
		if($scope.chatclass==false || $scope.chatclass== undefined){
			$scope.mySidenav = {"width" : "30%"};
			$scope.main = {"margin-left":"30%"};
			$scope.botones = {"margin-left":"36%"};
			$scope.chatclass = true;
		}else{
			$scope.mySidenav = {"width" : "0"};
			$scope.main = {"margin-left":"0"}
        	$scope.botones = {"margin-left":"50%"};
        	$scope.chatclass = false;
		}
		

	}

	$scope.closeNav = function (){
		$scope.chatclass = false;
		$scope.mySidenav = {"width" : "0"};
		$scope.main = {"margin-left":"0"}
        $scope.botones = {"margin-left":"50%"};
	}


}