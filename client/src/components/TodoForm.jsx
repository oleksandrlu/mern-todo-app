import styles from '../ui/TodoForm.module.css';
import { createTodo } from '../services/TodoServices';
import { useState } from 'react';

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const response = await createTodo({ todo: title });
    console.log(response);
    setTitle('');
    fetchTodos();
  };
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeading}>Todo List</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter a Todo"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className={styles.formButton} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
