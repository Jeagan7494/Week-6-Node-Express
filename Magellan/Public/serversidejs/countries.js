var Country = function(countryName, countryInput, index){
	this.countryName = countryName;
	this.countryInput = countryInput;
	this.index = index
};

var countryData = [];


countryData.push(new Country('Seville', 'Stop 1!', 0))
countryData.push(new Country('Canary Islands', 'Stop 2!', 1))
countryData.push(new Country('Cape Verde', 'Stop 3!', 2))
countryData.push(new Country('Strait of Magellan', 'Stop 4!', 3))
countryData.push(new Country('Guam', 'Stop 5!', 4))
countryData.push(new Country('Philippines', 'Stop 6!', 5))

module.exports={
	data: countryData
	}
}
