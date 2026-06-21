const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connected a specific database .... it returns a promise...therefore catch and then

mongoose.connect("mongodb+srv://siyab8160_db_user:siya123@cluster0.e564pkt.mongodb.net/Hi-Tech?appName=Cluster0")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));


// schema of students -> designing schema
const studentSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
            minlength: 3
        },
        age:
        {
            type: Number,
            min: 18,
            required: false
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        ip:
        {
            type: String,
            required: true,
            unique: true
        }
    }
)
//model -> defining model
const Student = mongoose.model("student", studentSchema)

//All the CRUD operations are asynchronous

app.get('/', (req, res) => {
    res.render("home.ejs")
})


app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
})

app.get('/delete/:userid',async(req,res)=>
{   
    let deldata = await Student.findByIdAndDelete(req.params.userid);
    res.redirect("/showdata");
})


app.get('/edit/:userid',async(req,res)=>
{
    let data= await Student.findById(req.params.userid)
    res.render("edit.ejs",{data})
})

app.post('/update/:userid',async(req,res)=>
{
    let data = await Student.findByIdAndUpdate(req.params.userid,req.body,{new:true})
    res.redirect("/showdata");
})
app.post('/createdata', async (req, res) => {
    let obj = {
        name: "Aman",
        age: 20,
        course: "BTech"
    }
    req.body.ip = req.ip;

    let data = await Student.create(req.body)
    console.log(data);
    res.redirect("/showdata");
})

app.get('/showdata', async (req, res) => {
    let allstudents = await Student.find();
    res.render("student",{allstudents})
})

app.listen(3000, () => {
    console.log("server is live at ", 3000);
})