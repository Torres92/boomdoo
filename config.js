var config = {
	server:{
		port : process.env.PORT || 3000

	},
	session:{
		secret:'boomdoo'
	},
	cloudinary : {
		cloud_name : "",
		api_key : "",
		api_secret : ""
	},
	mailgun:{
		domain: "",
		apiKey: ""
 	},
	site: {
		url: '',
		title: 'boomDoo',
		html: {
			engine: 'ejs',
			minify: true
	 	}
 	},
 	db:{
 		port: process.env.MONGODB_URI || 'mongodb://localhost/boomdoo'
 	},
 	token:{
 		secret : 'secretodeltoken'
 	},
  	application: {
    	controllers: {
      	default: 'index',
      	current: ''
    	}
 	},
};
 
module.exports = config;