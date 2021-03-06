// while https is built-in to Node, it is a module, 
// so it must be required
var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  var text = "";
  https.get(options, function (response) {

	// set encoding of received data to UTF-8
	response.setEncoding('utf8');

	// the callback is invoked when a `data` chunk is received
	// ignoring, because we are not printing midway
	response.on('data', function (data) {
	//    console.log(data + '\n');
	  text += data;
	});
	
	// the callback is invoked when all of the data has been 
	// received (the `end` of the stream)

	response.on('end', function() {
	  callback(text);
	});

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

module.exports = {
	getHTML: getHTML,
	printHTML: printHTML
};

// var myModule = require("./my-module");