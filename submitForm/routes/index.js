var home = function(req, res){
  res.send('Hello')
}

var formSubmit = function(req, res){
  res.sendFile('HTML/form.html', {root : './public'})
}

var success = function(req, res){
  res.send('Success!')
}


module.exports = {
	home : home,
	form : formSubmit,
	success : success
}


