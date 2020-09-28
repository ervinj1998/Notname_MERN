const express = require ('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello world from node js.");

});

const port = 8080;
app.listen(port, () => {console.log(`A node Js API listening on port: ${port}`);

});

