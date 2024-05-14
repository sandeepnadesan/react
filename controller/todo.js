const Todo = require('../models/todo')


module.exports.getAllTodos=async(req,res)=>{}

module.exports.getAllTodosById=(req,res)=>{}
module.exports.addTodo=async(req,res)=>{
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.status(200).send({msg:"added sucessfully"});
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
module.exports.updateTodo=(req,res)=>{
    const {id} = req.params;
    
}
module.exports.deleteTodo=(req,res)=>{

}