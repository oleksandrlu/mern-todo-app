const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.status(200).json({ todos: allTodos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Error' });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    console.log('Todo Created successfully');
    res
      .status(201)
      .json({ message: 'Todo Created Successfully', todo: newTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal error' });
  }
};

const editTodos = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: 'No todo found' });
    }

    res.status(200).json({ todo: updatedTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal error' });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(400).json({ message: 'Todo Not Found' });
    }

    res.status(200).json({ 'Todo Deleted :': deletedTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  editTodos,
  deleteTodo,
};
