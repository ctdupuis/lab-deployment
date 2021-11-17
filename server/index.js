const express = require('express');

const app = express();

const path = require("path");

app.use('/js', express.static(path.join(__dirname, '../public')));

const {
    home
} = require('./controller');

app.get("/", home);

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
})

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Running on port ${port}`));