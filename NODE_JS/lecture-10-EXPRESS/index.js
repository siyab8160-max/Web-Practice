let express=require("express")
console.log(typeof(express)); //function

let app=express();
// console.log(app)
console.log(typeof(app));

let port=3000

app.get(("/"),(req,res)=>{
    console.log("a user is on the home page ..");
    res.send("data sent successfully");
})

app.get(("/about"),(req,res)=>{
    console.log(" about page server side ");
    res.send("about page");
})

// // * -> universal 
// app.get('*',(req,res)=>{
//     res.send("get request me path galat hai ")
// })


app.all ("/about",(req,res)=>{
    console.log(" bhai kha h tu  ");
    res.send(" pagal go gya hai kya bhai....error page");
})

// app.all('*',(req,res)=>{
//     //universal of universal
//     console.log("universal http and universal route");
//     res.send("404 error page");
// })

app.listen(3000,(error)=>{
    console.log("app is running on port : ", port);
})

