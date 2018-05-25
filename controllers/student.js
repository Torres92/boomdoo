const mongoose = require('mongoose'),
		bcrypt = require('bcrypt-nodejs'),
	  services = require('../services/token'),
		Student = require('../models/students.js');

exports.login = function (req,res,next){

	Student.findOne({'email':req.query.email},(err,user)=>{
		if(err) return res.status(500).send({message : err });

		if(!user) return res.status(404).send({message : 'Correo no existe'});

		if(!bcrypt.compareSync(req.query.password,user.password))  return res.status(404).send({message : 'Clave incorrecta'});
			
		req.session.user = user.email;//guarda la variable de session para mantener la session activa;

		res.status(200).send({
			token : services.createToken(user),
			name : user.name,
			email : user.email,
			lastname : user.lastname,
			email : user.email
		});
			
	})

}


exports.signup = function (req,res,next){

	let user=  new Student({
		name : req.query.name,
		lastname : req.query.lastname,
		password : req.query.password,
		sex : req.query.sex,
		birthdate : req.query.birthdate,
		occupation : req.query.occupation,
		country : req.query.country,
		email : req.query.email

	});

	user.save(function (err){
		if(err) return res.status(500).send({message : 'Correo existe'});
			
		res.status(200).send({
			token : services.createToken(user),
			name : user.name,
			lastname : user.lastname,
			email : user.email
		});
	});

}

exports.verifyAccount = function (req,res,next){

	 res.status(200).send({message : 'tienes permiso'})
}

exports.logoutStudent = function (req,res,next){

	res.status(200).send({message : 'cerrando sessión'})

}
