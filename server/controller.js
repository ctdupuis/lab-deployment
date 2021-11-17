const path = require('path');

module.exports = {
    home: (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')),
    about: (req, res) => res.sendFile(path.join(__dirname, '../public/about.html'))
};