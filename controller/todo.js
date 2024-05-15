const Todo = require('../models/todo')
module.exports.getAllTodos = async(req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).send({todos});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.getTodosById = async (req, res) => {
    const {id}=req.params;
    try{
        const todo=await Todo.findById(id);
        if(todo)
            {
                res.status(200).send(todo);
            }
            else{
                res.status(400).send({msg:"todo not found"})
            }
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
};

module.exports.addTodo = async (req, res) => {
    try{
        const todo=new Todo(req.body);
        await todo.save();
        res.status(200).send({msg:"todo created successfully"})
    }catch(err)
    {
        res.status(500).send(err.message);
    }
};

module.exports.updateTodo = async (req, res) => {
    const {id}=req.params;
    try{
        const todo=await Todo.findByIdAndUpdate(id,req.body);
        if(todo)
            res.status(200).send({msg:"Todo updated successsfully"})
    }catch(err)
    {
        res.status(500).send(err.message);
    }
};

module.exports.deleteTodo = async (req, res) => {

};