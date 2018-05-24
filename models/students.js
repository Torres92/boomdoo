'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs');


    const studentSchema = new Schema({
        email : {type : String,unique : true},
        password : {type : String},
        name :{type : String},
        lastname : {type : String},
        sex : {type : String},       
        birthdate : {type : String},
        occupation : {type : String},
        country : {type : String},
        photo : {type : String}

    })

    
    studentSchema.pre('save',function (next){ 

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

    



module.exports = mongoose.model('Students',studentSchema);