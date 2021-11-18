const path = require('path');

require('dotenv').config();

const Sequelize = require('sequelize');

const { ROLLBAR_TOKEN, DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

var Rollbar = require('rollbar');

var rollbar = new Rollbar({
  accessToken: ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

module.exports = {
    home: (req, res) => {
        rollbar.info("API Tapped");
        console.log("Hit endpoint")
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }
};