const express = require("express")
const app = express()


app.get("/user/:id/data", (req, res) => { //":" important for params creation.
    const params = req.params; 
    console.log(params);
    res.send("params received");
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});




