const express = require("express")
const app=express();
const port=3000;
const fs=require("fs");
let i=0;


app.use("/public",express.static("public")); // middleware to serve the public folder
app.use("/assets",express.static("assets")); 
app.use((req,res,next)=>
{   
    // i++;
    // const timestamp= new Date(); //stores time stamp
    // console.log(timestamp);
    // const log = `client data ${i}= ${timestamp}, ${req.url}, ${req.ip} \n`;
    // fs.appendFileSync("log.txt",log,"utf-8");
    next();
})

app.get('/',(req,res)=>{
    res.send("home page....")
})

app.post("/register",(req,res)=>
{
    res.send("user registration completed ....")
})


app.listen(port,()=>
{
    console.log("Server is running at ",port);
})