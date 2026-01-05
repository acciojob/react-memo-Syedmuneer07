import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./ReactMemo";
import UseMemoComponent from "./UseMemo";

export default function App() {
  const [todos, setTodos] = useState(["Learn React", "Do laundry"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Update document title when todos change (demonstrates useEffect)
    document.title = `Todos: ${todos.length}`;
  }, [todos]);

  const addTodo = () => setTodos((prev) => [...prev, "New todo"]);

  const submitTodo = () => {
    if (input.trim().length <= 5) {
      setError("Todo must be more than 5 characters");
      return;
    }
    setTodos((prev) => [...prev, input.trim()]);
    setInput("");
    setError("");
  };

  const increment = () => setCount((c) => c + 1);

  // useMemo to avoid recomputing derived data unless todos change
  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Memo Output</h1>

      <div style={{ marginBottom: 10 }}>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div style={{ marginBottom: 10 }}>
        <span>Count: <strong>{count}</strong></span>
        <button onClick={increment} style={{ marginLeft: 8 }}>Increment</button>
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          aria-label="memo-input"
          placeholder="Write a todo (min 6 chars)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={submitTodo} style={{ marginLeft: 8 }}>Submit</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>

      <UseMemoComponent todos={memoizedTodos} />
      <TodoList todos={memoizedTodos} />
    </div>
  );
}

