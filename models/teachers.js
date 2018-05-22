'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');


    const userSchema = new Schema({
        email : {type : String,unique : true},
        password : {type : String},
        displayName :{type : String},
        sex : {type : String},       
        birthdate : {type : Date},
        occupation : {type : String},
        country : {type : String},
        photo : {type : String},
        competittion :{type : Array},//description 
        knowledge : {type : String},//texto donde el profesor coloca para avalar sus conocimientos
        document : {type : String}

    })

    
    userSchema.pre('save',function (next){ 

        if (!this.isModified('password')) return next();

        bcrypt.genSalt(10, (err, salt) => {

           if (err) return next(err); 

    	   bcrypt.hash(this.password,salt,null,(hashError,hash)=>{

            if (hashError) return next(hashError);
            
    		this.password = hash;

            next();
            
    	   });

        });
    });

    



module.exports = mongoose.model('User',userSchema);