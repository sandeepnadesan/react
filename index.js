const express = require("express")
const todoRouter = require('./router/todo')
const app = express()

const mongoose = require("mongoose")

app.use(express.json())

const url ="mongodb://localhost:27017/workshop"
mongoose.connect(url)
.then((_) => {
    console.log("connected");
}).catch((err)=>{
    console.log(err.message);
})
app.use('/',todoRouter);



app.listen(3000,()=>{
    console.log("server started");
});