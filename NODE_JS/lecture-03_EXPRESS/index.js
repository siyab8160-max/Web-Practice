const express = require("express")       //import express from node_modules
const app=express()
//app is an object here which has {
//get:()=>{},post :()=>{},use:()=>{}}


// //middlewares
// app.use("/",(req,res)=>
// {
//     console.log("middleware");
//     //request will get stuck here as we haven't sent it to next function / middleware 

// })
//stats with "/"
//runs for the requests 


app.use((req,res,next)=>
{
    console.log("middleware");
    next(); // It passes the request to next middleware ; to pass the control to next middleware(get, post, put, patch, delete are all middlewares )
})

//it will run for those api whose path start with "/"
app.use("/",(req,res,next)=>
{
    console.log("middleware");
    next(); // It passes the request to next middleware
})

//request(type/method , url/path)
//home route -> "/"
//req->client information , res-> send response to user 
app.get("/",(req,res)=>{
    // console.log(req);
    console.log("hello"); //on the terminal 
    // res.send("HELLO");// on the browser
    res.send("hello , the server is live and the method is get")
    //request is stuck here.
    //but we have "next"
})


app.get("/second",(req,res)=>{
    // console.log(req);
    console.log("hello"); 
    res.send("hello , this is second and the method is get")
})

app.post("/",(req,res)=>{
    console.log(req);
    res.send("hello , the server is live and the method is post")
})

app.patch("/",(req,res)=>{
    console.log(req);
    res.send("hello , the server is live and the method is patch")
})

app.put("/",(req,res)=>{
    console.log(req);
    res.send("hello , the server is live and the method is put")
})



const PORT=8000;
app.listen(PORT,()=>{
    console.log("server is started at",`http://localhost:${PORT}`);
});
//starts the server, port->mapping of process in system


