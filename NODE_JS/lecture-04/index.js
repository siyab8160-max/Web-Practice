const express = require("express")
const app = express()

//query params
//request and response are both objects.
//the query params are present in the request.
app.get("/search", (req, res) => {
    const query = req.query; // query is an object
    console.log(query);
    res.send("query received");
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});
//starts the server, port->mapping of process in system


