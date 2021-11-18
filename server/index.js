const express = require('express');

require('dotenv').config();

const app = express();

const path = require("path");

app.use(express.static("public"));




const {
    home,
    about
} = require('./controller');

app.get("/", home);
app.get("/", about);

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Running on port ${port}`));