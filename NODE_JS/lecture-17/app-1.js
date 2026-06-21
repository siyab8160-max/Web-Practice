const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connected a specific database .... it returns a promise...therefore catch and then

mongoose.connect("mongodb+srv://siyab8160_db_user:siya123@cluster0.e564pkt.mongodb.net/?appName=Cluster0")
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
            required: true
        }
    }
)
//model -> defining model
const Student = mongoose.model("student", studentSchema)

//All the CRUD operations are asynchronous

app.post('/createdata', async (req, res) => {
    let obj = {
        name: "Aman",
        age: 20,
        course: "BTech"
    }
    let data = await Student.create(req.body)
    console.log(data);
    res.send("data saved...");
})


app.get("/insertdata", (req, res) => {
    res.render("form.ejs");
})
app.listen(3000, () => {
    console.log("server is live at ", 3000);
})