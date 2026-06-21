const express = require ("express")
const app = express()


app.get("/",(req,res)=>{
    console.log()
    res.json({
        "name":"siya",
        "college":"Mirai School of Technology"
    })
})

// http://localhost:3000/result/1/12
app.get("/result/:year/:roll",(req,res)=>
{   
    console.log(req.params.roll)
    console.log(req.params)
    res.send("pass ",req.params.roll)//value can be sent to the browser for rendering and not an object
})
// [Object: null prototype] { year: '1', roll: '12' }

// http://localhost:3000/search?name=siya&address=Gzb
app.get("/search",(req,res)=>
{
    console.log(req.query)
    res.send("data found in db")
})
// [Object: null prototype] { name: 'siya', address: 'Gzb' } ->OUTPUT

app.listen(3000,()=>
{
    console.log("server is live at",3000);
})