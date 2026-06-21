const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

// connected a specific database .... it returns a promise...therefore catch and then
mongoose.connect("mongodb://localhost:27017/collegeDB").then(() => console.log("DB Connected"))
    .catch(err => console.log(err));


// schema of students -> designing schema
const studentSchema = new mongoose.Schema(
    {
        // name: "String",
        // age: Number,
        // course: "String"
        //VALIDATION
        name:
        {
            type:String,
            required:true,
            minlength:3
        },
        age:
        {
            type:Number,
            min:18,
            required:false
        },
        email:{
            type:String,
            required:true
        }
    }
)
//model -> defining model
const Student = mongoose.model("student", studentSchema)
// console.log(Student)

//making different collections
// const club=mongoose.model("club",studentSchema); //since this collection doesn't exist, a new collection is made.


// Collection Naming Automation: The first argument represents the singular name of your model. Mongoose Models automatically look for the lowercase, pluralized version of this string as the target MongoDB collection. For example, a model named 'User' targets the users collection
// app.get("/", async (req, res) => {
//     let allstudents = await Student.find(); //IMPORTANT 
//     console.log(allstudents)
//     let obj = {
//         "name": "Siya",
//         "age": 19
//     }
//     filtered_students=allstudents.filter((ele)=>
//     {
//         if(ele.age>=20)
//             return true;
//         return false;
//     })
//     res.render("student",{filtered_students});
// })


//All the CRUD operations are asynchronous

app.post('/createdata',async(req,res)=>
{
    let obj={
        name:"Aman",
        age:20,
        course:"BTech"
        }
    let data=await Student.create(req.body)  
    console.log(data);
    res.send("data saved...");
})


app.get("/insertdata",(req,res)=>
{
    res.render("form.ejs");
})

app.listen(3000, () => {
    console.log("server is live at ", 3000);
})