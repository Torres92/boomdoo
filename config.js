var config = {
	server:{
		port : process.env.PORT || 3000

	},
	session:{
		secret:'cuponapp'
	},
	cloudinary : {
		cloud_name : "dancupapp",
		api_key : "411729613762936",
		api_secret : "wLnsX33cZDoQi4gbcEQMBLipLI0"
	},
	mailgun:{
		domain: "mg.cuponapp.com",
		apiKey: "key-54a1be463d37bce3adf31f26e8bf52c2"
 	},
	site: {
		url: '',
		title: 'Cuponapp',
		html: {
			engine: 'ejs',
			minify: true
	 	}
 	},
 	db:{
 		port: process.env.DATABASE_URL || 'mongodb://localhost/boomdoo'
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