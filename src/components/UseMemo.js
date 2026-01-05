import React, { useMemo } from "react";

export default function UseMemo({ todos }) {
  // useMemo to compute number of todos with length > 5
  const longCount = useMemo(() => todos.filter((t) => t.length > 5).length, [todos]);

  return (
    <div style={{ marginBottom: 10 }}>
      <h3>Long Todos: {longCount}</h3>
    </div>
  );
}
