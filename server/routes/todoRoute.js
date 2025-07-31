const express = require('express');
const {
  getAllTodos,
  createTodo,
  editTodos,
  deleteTodo,
} = require('../controllers/todoController');

const router = express.Router();

// GET ALL TODOS
router.get('/todo', getAllTodos);

// CREATE TODO
router.post('/todo', createTodo);

// EDIT TODOS
router.put('/todo/:id', editTodos);

// DELETE A TODO
router.delete('/todo/:id', deleteTodo);

module.exports = router;
