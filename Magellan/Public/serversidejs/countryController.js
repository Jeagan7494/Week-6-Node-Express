var countryModel = require('../public/serversidejs/countries.js');


//Export so we can 
module.exports = {

	getCountries : function(req, res){
		res.send(countryModel)
	}



}