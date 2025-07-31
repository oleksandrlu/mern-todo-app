import styles from '../ui/TodoItem.module.css';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { FaRegSave } from 'react-icons/fa';

import { useState } from 'react';
function TodoItem({ item, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(item.todo);

  const handleEdit = () => {
    setIsEditing((prev) => {
      return !prev;
    });
  };

  const handleSave = async () => {
    await onSave(item._id, { todo: updatedTodo });
    setUpdatedTodo('');
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        {isEditing ? (
          <input
            placeholder={item.todo}
            autoFocus
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          <h3>{item.todo}</h3>
        )}

        <div className={styles.buttons}>
          {isEditing ? (
            <button onClick={handleEdit}>X</button>
          ) : (
            <button onClick={handleEdit}>
              <MdEdit />
            </button>
          )}
          {isEditing && (
            <button onClick={handleSave}>
              <FaRegSave />
            </button>
          )}
          <button onClick={() => onDelete(item._id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
