// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
var countryData = require('./public/serversidejs/countries')
console.log(countryData)
app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});


app.get('/getcountries', countryController.getCountries)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})