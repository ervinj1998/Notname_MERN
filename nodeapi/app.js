const express = require('express')
const app = express();
const morgan = require('morgan');

// bring in routes

const postRoutes = require("./routes/post");


//middelware.
app.use(morgan("dev"));
app.use("/", postRoutes); //usando la constante postRoutes

const port = 8081;
app.listen(port, () => {
    console.log(`A node Js API listening on port: ${port}`);

});