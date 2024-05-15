const express = require("express");
const router = express.Router();

const {
    getAllTodos,
    getTodosById,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../controller/todo');

// Define routes with different paths and HTTP methods
router.get('/', getAllTodos);
router.get('/:id', getTodosById);
router.post('/', addTodo); // Use POST for adding a new todo
router.put('/:id', updateTodo); // Use PUT for updating a todo
router.delete('/:id', deleteTodo); // Use DELETE for deleting a todo

module.exports = router;
