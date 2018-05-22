angular.module('app')
.service('Webrtc',['$q',Webrtc]);

function Webrtc($q){

	return{
		init : function (){
			var webrtc = new SimpleWebRTC({
				localVideoEl: 'localVideo',//instancia mi camara local;
				remoteVideosEl: 'remoteVideo',
				media: { audio: true, video: true},
  				autoRequestMedia: true//inicia mi camara de manera autimatica
			});

			return webrtc;

		},
		joinRoom : function (webrtc){
			webrtc.on('readyToCall', function () {
  				// conectar la video llamada a la sala
  				webrtc.joinRoom('tumadre');
			})
		}
    
  }


	

}