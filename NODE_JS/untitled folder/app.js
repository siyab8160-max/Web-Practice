const express = require("express")
const app = express();
const port = 3000;
const log=require('./middleware/log.js');
const connectDB=require('./config/db.js');
const route = require("./routes/gigRouter.js");
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(log); // global middleware

app.use('/gold',gold); // route dependent middleware

app.use("/",gigRouter);





app.listen(port, () => {
    console.log("server is live at ", port);
})