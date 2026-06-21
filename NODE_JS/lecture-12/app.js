const express = require("express")
const app=express();
const port=4000;
const fs=require("fs");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended:true})); // for parsing application/x-www....


app.get('/',(req,res)=>{
    res.send("home page....")
})

app.post("/register",(req,res)=>
{   
    console.log(req.body)
    fs.appendFileSync("data.json",JSON.stringify(req.body)+'\n',"utf-8")
    res.send("user registration completed ....")
})


app.listen(port,()=>
{
    console.log("Server is running at ",port);
})