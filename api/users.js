var express = require('express');
var router = express.Router();
var ctrlStudent =  require('../controllers/student.js');
var ctrlTeacher =  require('../controllers/teacher.js');
var auth = require('../middlewares/auth');
var session = require('../middlewares/session');


router.get('/verifyAccount',session.isAuth,ctrlStudent.verifyAccount);
router.post('/loginStudent',ctrlStudent.login);
router.post('/loginTeacher',ctrlTeacher.login);
router.post('/signupStudent',ctrlStudent.signup);
router.get('/logoutStudent',ctrlStudent.logoutStudent);


module.exports = router;