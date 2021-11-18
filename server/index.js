const express = require('express');

const app = express();


app.use(express.static("public"));

const {
    home
} = require('./controller');

app.get("/", home);

const port = process.env.PORT || 4105

app.listen(port, () => console.log(`Running on port ${port}`));