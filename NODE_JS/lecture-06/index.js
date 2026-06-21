// const express = require("express");
// const app = express();
// const PORT = 4000;
// const path = require("path")
// const {v4 : uuidv4}=require("uuid")
// let TODOS = [];
// //{
// //  id:
// //  task:"cooking at 4pm"
// //  status:true/false
// //  true->the task is active
// //  false->completed
// //  
// //  created At:Date.now()
// //}

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/todo/all", (req, res) => {
//     try {
//         res.status(200).json({ todos: TODOS })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message })
//     }
// })

// app.post("/todo/create", (req, res) => {
//     try {
//         const task = req.body.task;
//         const todo = {
//             id:uuidv4(),
//             task: task,
//             status: true,
//             createdAt: new Date().toLocaleDateString()
//         }
//         TODOS.unshift(todo);
//         res.status(201).json({message:"TODO Created",todos:TODOS})
//     }catch(error)
//     {
//         console.log(error);
//         res.status(500).json({message:message.error});
//     }

// })


// app.listen(PORT, () => {
//     console.log("server is started at", `http://localhost:${PORT}`);
// });


const express = require("express");
const app = express();
const PORT = 4000;
// to get absolute path of any system upto my server folder
const path = require("path")
const { v4: uuid } = require("uuid")

// absolute path of public folder
// app.use(express.static("/Users/shbha/Desktop/cb/mirai/beta/lect13/todoapp/public"))
app.use(express.static(path.join(__dirname, "public")))

const TODOS = [];
// {
// id:unique id,
// task:"cook food",
// status:  true/false,
// pending -> false , completed -> true
// createdAt: new Date()
// }

app.get("/todo/all", (req, res) => {
    try {
        res.status(200).json({ message: "todos fetched", todos: TODOS })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

app.post("/todo/create", (req, res) => {
    try {
        // const body = req.body;
        // const task = body.task;
        const task = req.body.task;
        const todo = {
            id: uuid(),
            task: task,
            status: false,
            createdAt: new Date().toLocaleTimeString()
        }
        TODOS.unshift(todo);
        res.status(201).json({ message: "todo created", todos: TODOS })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
})

app.delete("/todo/:id/delete")
{
    try {
        const id = req.params.id;
        TODOS = TODOS.filter((todo) => {
            return todo.id !== id;
        })
        res.status(204).json({ message: "Todo Deleted", todos: TODOS })

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: message.error });
    }
}

app.put("/todo/:id/update", (req, res) => {
    try {
        const id = request.params.id;
        TODOS = TODOS.map((todo) => {
            if (todo.id === id) {
                todo.status = !todo.status;
            }
            return todo;
        })
        res.status(204).json({ message: "Todo Updated", todos: TODOS })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: message.error });
    }
})

app.get("/todo/filter",(req,res)=>
{
    try{
        const filter=req.query.filter;
        const todos=TODOS.filter((todo)=>{
            if(filter=="completed")
                return todo.status==false;
            return todo.status!==false;
        }
        )
        res.status(200).json({ message: "Todo Updated", todos: TODOS })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: message.error });
    }
})

app.listen(PORT, (req, res) => {
    console.log(`server is live at http://localhost:${PORT}`);
})