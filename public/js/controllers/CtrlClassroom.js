angular.module('app',["ngTouchstart","ngTouchend","ngTouchmove"])
.controller('CtrlClassroom',['$scope',CtrlClassroom])

function CtrlClassroom($scope){
	$scope.msm = [];
	
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

	// a peer video has been added
	webrtc.on('videoAdded', function (video, peer) {
   
    	console.log('video added', peer);

	});

	webrtc.on('videoRemoved', function (video, peer) {
    	console.log('video removed ', peer);
   
	});

	webrtc.on('iceFailed', function (peer) {

    	console.log('local fail', peer);
    
	});


	webrtc.on('connectivityError', function (peer) {
    
    	console.log('remote fail', peer);
   
	});

	$scope.submitSms = function (sms){
		$scope.msm.push(sms);
		webrtc.sendToAll('chat', sms);

	}

webrtc.connection.on('message', (data) => {
  if (data.type === 'chat') {
    const message = data.payload;
    $scope.$apply(function (){
    	$scope.msm.push(message)
    })
    
  }

  if(data.type==='pulseraton'){
  	dibujando = true;
	ctx.beginPath();
	ctx.moveTo(data.payload.x,data.payload.y);

  }
  if(data.type==='mueveRaton'){
  	 ctx.lineTo(data.payload.x,data.payload.y);
       ctx.stroke();
	
  }

});


var lienzo = document.getElementById('canvas'),
     ctx = lienzo.getContext('2d');
 var dibujando = false;


$scope.pulsaRaton = function (event){
	dibujando = true;
	ctx.beginPath();
	ctx.moveTo(event.clientX,event.clientY);
	webrtc.sendToAll('pulseraton', {x:event.clientX,y:event.clientY});
}

$scope.levantaRaton = function (event){
	dibujando = false
}

$scope.mueveRaton = function (event){
	 if(dibujando){
         ctx.strokeStyle='#000';
         ctx.lineTo(event.clientX,event.clientY);
         ctx.stroke();
         webrtc.sendToAll('mueveRaton', {x:event.clientX,y:event.clientY});
     }
}

$scope.ontouchstart = function(event){
	dibujando = true;
	ctx.beginPath();
	ctx.moveTo(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
	webrtc.sendToAll('pulseraton', {x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY});
}

$scope.ontouchend = function (event){
	dibujando = false
}

$scope.onTouchmove = function (event){
	 if(dibujando){
	 
	 	ctx.strokeStyle='#000';
         ctx.lineTo(event.changedTouches[0].clientX,event.changedTouches[0].clientY);
         ctx.stroke();
         webrtc.sendToAll('mueveRaton', {x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY});
     }
}


}