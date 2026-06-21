const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.status(200).json({message:"everything went well",data:"siya"})
})

app.get("/info", (req, res) => {
    try{
        //...MY WORK
        let num=Math.random()*10;
        if(num<5){
            throw new Error("number is less than 5 , thus an error is generated")
        }
        res.status(200).json({message:"work done",number:num})
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({message:error.message});
        //a response is required to sent even if there is an error 
    }
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log("server is started at", `http://localhost:${PORT}`);
});




