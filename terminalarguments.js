var fs = require("fs")
var theCountry = process.argv[2]						// variable containing what we actually type in we have [2] because that is when the relevant things are read from the console 
fs.readFile('countries.JSON', 'utf8', function (err, data) {
    if (err) throw err; 
    var obj = JSON.parse(data);							// variable containing parsed data

    for (var i = 0; i < obj.length; i++) {				// the for loop
    if (theCountry === obj[i].name)						// this compares what u type in to the whole list
		console.log(`country: ${obj[i].name} Top Level Domain ${obj[i].topLevelDomain}`);   // this is what will look for each class of the list
};

	
		





});


