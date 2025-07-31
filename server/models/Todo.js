const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    todo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
