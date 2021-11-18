const express = require('express');

const app = express();

const path = require("path");

app.use(express.static("public/assets"));



const {
    home,
    about
} = require('./controller');

app.get("/", home);

const port = process.env.PORT || 4105

app.listen(port, () => console.log(`Running on port ${port}`));