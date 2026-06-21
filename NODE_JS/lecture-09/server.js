const http=require('http')
const fs=require('fs')
const {student}=require("./students.js");

const server =http.createServer((req,res)=>
{
    if(req.method=="GET")
    {
        console.log("wait..we are working on your request");

        let data=JSON.stringify(students);
        console.log(data);
        res.write(data);
        res.write("hi");
        res.end("data end sucessfully");
    }
    if(req.method=='POST'){
        res.end("data saved successfully");
    }
})

server.listen(4000,(err)=>
{
    if(err){
        console.log(err)
    }
    console.log("server is running at 4000");
})