const express = require("express")
const app = express();
const port = 4000;
const fs = require("fs");
// const data=require("MOCK_DATA (1)");



app.use(express.urlencoded({ extended: true }));
app.use(express.json())// parsing the data

app.use(express.static("public")); // for serving static file -> public

app.get('/', (req, res) => {
    res.send("home page....")
})

app.post('/register', (req, res) => {
    const c_data = req.ip;
    console.log(req.body);

    fs.appendFileSync("data.json", JSON.stringify(req.body) + '\n', "utf-8")
    res.send("user registration completed ....")
})

// app.get("/data",(req,res)=>{
//     res.send(data);
// })

app.listen(port, () => {
    console.log("Server is running at ", port);
})