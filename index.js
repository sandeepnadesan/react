const express = require("express")
const todoRouter = require('./router/todo.js')
const app = express()
const cors = require('cors')
app.use(cors());
const mongoose = require("mongoose")
const port = 3000;
app.use(express.json())

const url ="mongodb://localhost:27017/workshop"
mongoose.connect(url)
.then((_) => {
    console.log("connected");
}).catch((err)=>{
    console.log(err.message);
})
app.use('/',todoRouter);



app.listen(port,()=>{
    console.log(`server started ${port}`);
});