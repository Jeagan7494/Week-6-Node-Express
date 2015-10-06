var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]


var isLight = function(r, g, b) {
	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
	if(luminosity > 155) {
		return 'light';
	} else {
		return 'dark'
	}
}




isLight(r, g, b)

console.log(isLight(r, g, b))