const express = require('express');

const app = express();

const path = require("path");

app.use('/js', express.static("public"));

const {
    home
} = require('./controller');

app.get("/", home);

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Running on port ${port}`));