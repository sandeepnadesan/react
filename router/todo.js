const express =  require("express")

const router = express.Router();

const{
    getAllTodos,
    getAllTodosById,
    addTodo,
    updateTodo,
    deleteTodo
}=require('../controller/todo');

router.get('/',getAllTodos);
router.get('/:id',getAllTodosById);
router.get('/',addTodo);
router.get('/:id',updateTodo);
router.get('/:id',deleteTodo);

module.exports = router
