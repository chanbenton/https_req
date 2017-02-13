// while https is built-in to Node, it is a module, 
// so it must be required
var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  var chunks = "";
  https.get(options, function (response) {

	// set encoding of received data to UTF-8
	response.setEncoding('utf8');

	// the callback is invoked when a `data` chunk is received
	// ignoring, because we are not printing midway
	response.on('data', function (data) {
	//    console.log(data + '\n');
	  chunks += data;
	});
	

	// the callback is invoked when all of the data has been 
	// received (the `end` of the stream)
	response.on('end', function() {
	  console.log('Response stream complete.');
	});

	response.on('end', function() {
	  callback(chunks);
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

getHTML(requestOptions, printHTML);
// In another file, create a fourth function, getHTML. 
// This function will look and behave almost the same as your 
// third function, except:

// The function definition will now accept a callback as a
// second parameter.
// The function body will invoke (call) the callback when the
// data is fully received, in place of the original console.log.



// function getAndPrintHTML (options) {

//  
//  https.get(requestOptions, function (response) {

// 	// set encoding of received data to UTF-8
// 	response.setEncoding('utf8');

// 	// the callback is invoked when a `data` chunk is received
// 	response.on('data', function (data) {
// 	  console.log(data + '\n');
// 	});

// 	  // the callback is invoked when all of the data has been received
// 	  // (the `end` of the stream)
// 	response.on('end', function() {
// 	  console.log('Response stream complete.');
// 	});

//   });

// }