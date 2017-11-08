


var fs = require("fs")




module.exports = {

	read:function(filename, callback) {

    fs.readFile(filename, function(err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);

        callback(obj)

    })
}
}


