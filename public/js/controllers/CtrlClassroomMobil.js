angular.module('app')
.controller('CtrlClassroomMobil',['$scope','Webrtc','notify',CtrlClassroomMobil])

function CtrlClassroomMobil($scope,Webrtc,notify){

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
		$scope.chatclass = true;
		$scope.mySidenav = {"width" : "100%"};
		$scope.main = {"width":"0"};

		
		

	}

	$scope.closeNav = function (){
		$scope.chatclass = false;
		$scope.mySidenav = {"width" : "0"};
		$scope.main = {"width":"100%"}

	}


}