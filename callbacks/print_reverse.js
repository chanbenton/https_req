var custom = require("./getHTML");
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  console.log(html.split("").reverse().join(''));
  
  // Important notes: .split will put every char into an array, start-to-finish.
  // Imp notes 2: .join needs to have an empty string in brackets to remove the commas from array.

}

custom.getHTML(requestOptions, printReverse);