var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/loginmobilstudent', function(req, res, next) {
  res.render('login-mobil-student');
});
router.get('/loginmobilteacher', function(req, res, next) {
  res.render('login-mobil-teacher');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/classroom',function (req,res){
	res.render('video')
})
router.get('/classroom-mobil',function (req,res){
	res.render('classroom-mobil')
})

router.get('/videoprueba',function (req,res){
	res.render('classroom')
})


module.exports = router;
