'use strict'

	const services = require('../services/token.js');

   exports.isAuthToken = function (req,res,next){
   	  if(!req.headers.authorization) return res.status(403).send({message : 'No tienes autorizacion'});
   		const token = req.headers.authorization.split(' ')[1];
   		services.decodeToken(token).then(function (response){
           next();
   		}).catch(function (response){
   			res.status(response.status).send(response.message)
   		})

   }