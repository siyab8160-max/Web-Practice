const express=require("express");
const app=express();
const fs = require("fs");

const data=require("./data.json");
console.log(data);
console.log(typeof(data)); //object


let d2=fs.readFileSync("data.txt","utf-8");
console.log(d2)
d2=JSON.parse(d2);

app.use((req,res,next)=>{
    console.log(`${req.url} running middle 1`);
    next();
})
app.get
app.get("/",(req,res)=>
{
    res.send(d2);
})

app.listen(3000,()=>
{
    console.log("server is running at 3000"); 
})