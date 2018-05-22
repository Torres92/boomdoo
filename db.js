global.config = require('./config');
const db = require('mongoose');

db.connect(global.config.db.port,function (err){
	if(err) return console.log('hay error');
	console.log('db : ' + global.config.db.port)
});

module.exports = db;

