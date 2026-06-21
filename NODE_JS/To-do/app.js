const express = require("express");
const app = express();

const mongoose = require('mongoose');
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://siyab8160_db_user:siya123@cluster0.mlcdvmo.mongodb.net/Notepad?appName=Cluster0").then(() => {
    console.log("DB Connected")
}).catch((err) => console.log(err));

const noteSchema = new mongoose.Schema(
    {   
       
        title: String,
        task1: String,
        task2: String,
        task3: String,
         ip:{
            type:String,
            required:true,
            unique:true
        }
    }
)

const note = mongoose.model("note", noteSchema);

app.get("/",(req,res)=>
{
    res.render("home");
})

app.get('/test1',async(req,res)=>
{  
    //find() -> entire collection
    //find({name:""}) -> filtered
    //findOne({}) ->first filtered
   let data1= await note.find({title:"Make Tea"});
   let data2= await note.findOne({title:"Make Tea"});
   console.log(data1)
   console.log(data2)
   res.send("bye...testing route...")
})

app.get('/test2',async(req,res)=>
{  
//    let data= await note.updateMany({title:'Let us make tea'},{title:'MAKE TEA'});
   let data= await note.updateOne({title:'Let us make tea'},{title:'MAKE TEA'});
   // data is object that shows what happened to the document 
   // --v is the version of the particular document
   console.log(data)
   res.send("bye...testing route...")
})

app.get('/test3',async(req,res)=>
{
    let data = await note.deleteMany({title:'MAKE TEA'})
    console.log(data);
    res.send("bye...testing route...");
})

app.get('/test4',async(req,res)=>
{
    let data = await note.deleteMany({task1:{$gte:18}})
    console.log(data);
    res.send("bye...testing route...");
})

// app.get('/test5',async(req,res)=>
// {
//     let data = await note.findByIdAndDelete({"id"})
//     // return type is different here we'll get the document deleted, return type differs
//     console.log(data);
//     res.send("bye...testing route...");
// })


app.get("/createtask", (req, res) => {
    res.render("createtask")
})

app.post("/createtask", async (req, res) => {
   
    req.body.ip = req.ip;
    let data = await note.create(req.body);

    console.log(data);
    res.send("Note saved");
})

app.get("/showtasks", async (req, res) => {
    let alltasks = await note.find();
    res.render("showtasks", { alltasks })
})



app.listen(3000, () => {
    console.log("server is live at ", 3000);
})