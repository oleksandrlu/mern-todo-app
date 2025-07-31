import TodoForm from '../components/todoForm';
import TodoList from '../components/TodoList';
import { getTodos, deleteTodo, updateTodo } from '../services/TodoServices';
import { useEffect, useState } from 'react';

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (id) => {
    await deleteTodo(id);
    await fetchTodos();
  };

  const saveTodo = async (id, todo) => {
    const response = await updateTodo(id, todo);
    await fetchTodos();
  };

  return (
    <>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} onDelete={removeTodo} onSave={saveTodo} />
    </>
  );
}

export default Home;
