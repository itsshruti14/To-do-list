import React, { useState, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const API_URL = "http://localhost:8080/todos";

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.error(err));
    }, []);

    const addTodo = () => {
        if (!input.trim()) return;

        fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: input,
                completed: false
            })
        })
            .then(res => res.json())
            .then(newTodo => {
                setTodos([...todos, newTodo]);
                setInput("");
            });
    };

    const deleteTodo = (id) => {
        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then(() => setTodos(todos.filter(todo => todo.id !== id)));
    };

    const toggleTodo = (todo) => {
        fetch(`${API_URL}/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...todo, completed: !todo.completed })
        })
            .then(res => res.json())
            .then(updated => setTodos(todos.map(t => t.id === updated.id ? updated : t)));
    };

    return (
        <div
            style={{
                padding: "20px",
                minHeight: "100vh",
                backgroundImage: `url("/bg.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <h2>Todo App</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            onClick={() => toggleTodo(todo)}
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                cursor: "pointer"
                            }}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;