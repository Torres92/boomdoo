'use strict'

	const services = require('../services/token.js');

   	exports.isAuth = function (req,res,next){

       if(!req.headers.authorization) return res.render('index');
   		const token = req.headers.authorization.split(' ')[1];
   		services.decodeToken(token)
   		.then(function (response){
           res.status(200).send({message : 'autorizado'})
   		})
   		.catch(function (response){
   			res.render('index');
   		})

   	  

   	}