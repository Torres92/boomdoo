'use strict'

global.config = require('../config');
	const jwt = require('jwt-simple'),
  	   moment = require('moment');

 exports.createToken = function (user) {
 	const payload = {
 		sub : user._id, // id del usuario
 		iat : moment().unix(), //momento que se ha creado el token
 		exp : moment().add(15,'days').unix() //momento que sera expirado el token
 	};
 	return jwt.encode(payload,global.config.token.secret)

 }//token que se creara cada vez que se autentifica un usuario


 exports.decodeToken = function (token){
 	const decoded = new Promise(function (resolve,reject){
 		try{
 			const payload = jwt.decode(token,global.config.token.secret);
   			if(payload.exp < moment().unix()) {
   				reject({
   					status : 401,
   					message : 'El token ha expirado'
   				});
   			}

   			resolve(payload.sub);		
 		} catch(err) {
 			reject({
 				status : 500,
 				message : 'Invalid Token'
 			})
 		}
 	})
 	return decoded;
 }//decodificar el token para validar si el usuario tiene permiso o no

