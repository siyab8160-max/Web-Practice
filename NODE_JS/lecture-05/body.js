//In body : client encrypts the data into string or binary and then sends it to the server

const express = require("express")
const app = express()

//converting into back into json
app.use(express.json());
//inbuilt middleware to convert the encrypted data in body back to json.

//it's a middleware to convert the encrypted data in body(form data) to object
app.use(express.urlencoded({extended:true}));

app.post("/", (req, res) => { 
    const body = req.body; 
    console.log(body);
    // res.send("body recieved", body);
    //Using a POST request with a body is the standard method 
     //for sending data to a server to create or update resources
    //POST: Used for higher security requests

    res.json({message:"body recieved",data:body})
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});



