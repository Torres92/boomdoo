const mongoose = require('mongoose'),
		bcrypt = require('bcrypt-nodejs'),
		Teacher = require('../models/teachers.js');

exports.login = function (req,res,next){
	console.log(req.query.email)
	Teacher.findOne({'email':req.query.email},(err,user)=>{
		if(err) return res.status(500).send({message : err });

		if(!user) return res.status(404).send({message : 'Correo no existe'});

		if(!bcrypt.compareSync(req.body.password,user.password))  return res.status(404).send({message : 'Clave incorrecta'});
			
			res.status(200).send({
				active: true,
				token : services.createToken(user),
				displayName : user.displayName,
				email : user.email
			});
			
	})

}
