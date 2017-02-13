var custom = require("./getHTML");
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  console.log(html.toUpperCase());

}

custom.getHTML(requestOptions, printUpperCase);