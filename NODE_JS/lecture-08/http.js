let http =require ("http");
console.log(http);

let server = http.createServer((req,res)=>
{   
    console.log(req);
    console.log(res);
    console.log("server is running ....")

    res.end("insta home page")
})

server.listen(3000);