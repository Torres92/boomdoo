'use strict'

   exports.isAuth = function (req,res,next){
      if(req.session.user){
        next();
      }else{
        res.render('index')
      }
   	  

   }