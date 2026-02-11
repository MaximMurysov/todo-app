import { useState } from "react";
import styles from "./styles.module.css";
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
            <div key={elem.id} className={styles["todo-elem"]}>
              <input type="checkbox" />
              {elem.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
