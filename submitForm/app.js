// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index.js')
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
// app.get('/', routes.home);
app.get('/', routes.form);
app.post('/formsubmit', function(req, res){
	res.redirect('/success')

})
app.get('/success', routes.success);


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})