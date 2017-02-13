var custom = require("./getHTML");
var https = require('https');

var reqOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

custom.getHTML(reqOptions, custom.printHTML);