const express = require("express");
const app= express();

//assume it came from a file through reading or from the database
let obj1={
    name:"siya",
    "roll_no":29,
    "age":19
}
let colour= "yellow";
let flag=5;
app.set ("view engine","ejs")
app.get("/",(req,res)=>
{
    // res.send("Home page ....")
    //now it will be:
    res.render("user",{obj1,colour,flag})
})


app.listen(3000,()=>
{
    console.log("server is running");
})