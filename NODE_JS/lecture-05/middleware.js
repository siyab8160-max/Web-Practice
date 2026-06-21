const express = require("express")
const app = express()

//inbuild middleware
app.use(express.json())

//custom middleware 
app.use((req,res,next)=>{ // it will run for every request
    console.log("custom middleware");
    next()
    //it will pass the "req" to next middleware
})


//path specific middleware
app.use("/user",(req,res,next)=>
{
    console.log("user middleware");
    next();
})

app.use("/product",(req,res,next)=>
{
    console.log("product middleware");
    next();
})


//Router level middleware
const routerlevel =(req,res,next)=>
{
    console.log("router level middleware");
    next();
}


app.get("/user/all",(req,res)=>
{
    res.json({users:["user 1","user 2"]})
})

app.get("/product/all",(req,res)=>
{
    res.json({products:["product 1","product 2"]})
})

app.get("/info",routerlevel,(req,res)=>
{
    console.log("app report");
    res.send("report generated");
})
const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});




