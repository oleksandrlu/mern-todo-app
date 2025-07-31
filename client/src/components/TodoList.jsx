import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onSave }) {
  console.log(todos);

  return (
    <>
      {todos &&
        todos.map((item) => {
          return (
            <TodoItem
              item={item}
              key={item.id}
              onDelete={onDelete}
              onSave={onSave}
            />
          );
        })}
    </>
  );
}

export default TodoList;
