import React from "react";

const TodoList = React.memo(function TodoList({ todos }) {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
});

export default TodoList;
