const path = require('path');

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

var Rollbar = require('rollbar');

var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

module.exports = {
    home: (req, res) => {
        rollbar.info("Root endpoint hit");
        console.log(ROLLBAR_TOKEN, DATABASE_URL)
        console.log("HI I;M DOING A THING")
        res.sendFile(path.join(__dirname, '../public/index.html'));
    }
};