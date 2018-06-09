var fs = require('fs');
var readStream = fs.createReadStream('./mynewfile1.txt');
readStream.on('open', function () {
	console.log("File is open!");
});