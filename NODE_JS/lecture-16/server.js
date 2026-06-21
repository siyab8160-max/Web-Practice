const express=require('express')
const app=express()
const mongoose =require("mongoose");


mongoose.connect("mongodb://localhost:27017/ecommerce").then(()=>console.log("DB connected")).catch()
app.get("/",(req,res)=>
{   
    res.send("HOME PAGE....")
})

app.listen(3000,()=>
{
    console.log("server is running on port 3000")
})