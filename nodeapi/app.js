const express = require('express')
const app = express();
const morgan = require('morgan');

// bring in routes

const {
    getPosts
} = require("./routes/post");

app.get("/", getPosts);

const port = 8081;
app.listen(port, () => {
    console.log(`A node Js API listening on port: ${port}`);

});