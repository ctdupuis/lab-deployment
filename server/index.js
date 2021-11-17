const express = require('express');

const app = express();

const path = require("path");

app.use('/js', express.static(path.join(__dirname, '../main.js')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

const port = process.env.PORT || 4004

app.listen(port, () => console.log(`Running on port ${port}`));