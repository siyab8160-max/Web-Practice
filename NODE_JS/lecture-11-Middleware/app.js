const express=require("express");
const app=express();

app.use((req,res,next)=> // middleware 1
{
    let out=`url=${req.url} and address is ${req.ip}`;
    console.log(out);
    next();
})
app.use((req,res,next)=> // middleware 1
{
    console.log("middleware 1");
    //authentication 

    let auth = true;
    if(!auth){
        res.send("mobile Auth failed....try again")
    }else
        next();
    // next(); -> if the next isn't used the request ends here then 
})
app.use((req,res,next)=> // middleware 2
{
    console.log("middleware 2 responsible for email auth");
    //authentication 
    let auth = true;
    if(!auth){
        res.send("email Auth failed....try again")
    }
    else
        next();
    // next(); -> if the next isn't used the request ends here then 
})


app.get('/',(req,res)=>
{
    res.send("home page....");
})
app.post('/details',(res,req)=>{
    console.log("details wala route");
    console.log(req.body);
    res.send("data saved..")
    
    
})
app.get("/about",(req,res)=>
{
    res.send("about page");
})

app.use((req,res,next)=>
{
    res.send("page not found 404");
})
app.listen(3000,()=>
{
    console.log("server is running at 3000"); 
})