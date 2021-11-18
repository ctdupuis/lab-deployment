const path = require('path');

var Rollbar = require('rollbar');

var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

module.exports = {
    home: (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')),
    about: (req, res) => res.sendFile(path.join(__dirname, '../public/about.html'))
};