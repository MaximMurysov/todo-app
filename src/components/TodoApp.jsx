import { useState } from "react";
import styles from "./styles.module.css";
import TodoItem from "./TodoItem";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");
  const addTodo = () => {
    if (form.trim() === "") return;
    const newTodo = {
      id: crypto.randomUUID(),
      text: form,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setForm("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const saveTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };
  return (
    <div className={styles.todoApp}>
      <div className={styles["todoApp-container"]}>
        <div className={styles["add-todo"]}>
          <input
            className={styles.input}
            type="text"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <button className={styles["add-btn"]} onClick={addTodo}>
            Add
          </button>
        </div>
        <div className={styles["todos-card"]}>
          {todos.map((elem) => (
            <TodoItem
              key={elem.id}
              elem={elem}
              toggleTodo={toggleTodo}
              saveTodo={saveTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
