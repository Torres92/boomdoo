var express = require('express');
var router = express.Router();
var ctrlStudent =  require('../controllers/student.js');
var ctrlTeacher =  require('../controllers/teacher.js');

router.post('/loginStudent',ctrlStudent.login);
router.post('/loginTeacher',ctrlTeacher.login)


module.exports = router;