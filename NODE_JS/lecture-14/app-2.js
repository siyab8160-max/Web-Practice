const express = require("express");
const app= express();


app.set ("view engine","ejs")
app.get("/",(req,res)=>
{
   console.log(req.url);
   res.send("home page....");
})

app.get("/services",(req,res)=>
{
   console.log(req.url);
   console.log(req.params);
   console.log(req.query); 
   res.send("services....")
})
app.listen(4000,()=>
{
    console.log("server is running");
})