const express = require("express")
const app = express()


app.use("/user", (req, res, next) => {
    console.log("middleware");
    next();
})


app.get("/user/profile", (req, res) => {
    res.send("user profile")
})

app.get("/", (req, res) => {
    res.send("hello")
})

app.put("/user/id/update", (req, res) => {
    res.send("user id updated ")
})


app.delete("/user/id/delete", (req, res) => {
    res.send("user id deleted");
})


const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});
//starts the server, port->mapping of process in system


