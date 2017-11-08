var filereader = require("./json-file-reader")
var input = process.argv[2]



var readthis = function (x) {
 for (var i = 0; i < x.length; i++) {
                        if (input === x[i].name)
                 console.log(`country: ${x[i].name} Top Level Domain ${x[i].topLevelDomain}`);


	}
}

filereader.read('countries.JSON', readthis) // this executes both the function to parse data and the display


