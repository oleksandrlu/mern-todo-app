import axios from 'axios';

const url = 'http://localhost:5000/api/todo';

export const getTodos = async () => {
  const response = await axios.get(url);
  return response.data.todos;
};

export const createTodo = async (todo) => {
  const response = await axios.post(url, todo);
  return response.data.todo;
};

export const updateTodo = async (id, todo) => {
  const response = await axios.put(`${url}/${id}`, todo);
  return response.data.todo;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${url}/${id}`);
};
