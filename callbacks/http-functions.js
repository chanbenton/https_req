var custom = require("./getHTML");
var https = require('https');

var reqOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// Pulls from getHTML to read the above filepath.
custom.getHTML(reqOptions, custom.printHTML);