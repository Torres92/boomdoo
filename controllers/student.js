const mongoose = require('mongoose'),
		bcrypt = require('bcrypt-nodejs'),
		Student = require('../models/students.js');

exports.login = function (req,res,next){

	Student.findOne({'email':req.query.email},(err,user)=>{
		if(err) return res.status(500).send({message : err });

		if(!user) return res.status(404).send({message : 'Correo no existe'});

		if(!bcrypt.compareSync(req.body.password,user.password))  return res.status(404).send({message : 'Clave incorrecta'});
			
		res.status(200).send({
			token : services.createToken(user),
			displayName : user.displayName,
			email : user.email
		});
			
	})

}


exports.signIn = function (req,res,next){

	let student =  new Student({
		displayName : req.body.name + '' + req.body.lastname,


	});

}
