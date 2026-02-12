import { useState } from "react";
import styles from "./styles.module.css";
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState("");
  //   const [isEdit, setIdit] = useState(false);
  const addTodo = () => {
    if (form.trim() === "") return;
    const newTodo = {
      id: crypto.randomUUID(),
      text: form,
      completed: false,
      isEdit: false,
    };
    setTodos([newTodo, ...todos]);
    setForm("");
  };
  const toogleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
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
            <div key={elem.id} className={styles["todo-elem"]}>
              <div className={styles["todo-value"]}>
                <input
                  type="checkbox"
                  value={elem.completed}
                  onChange={() => toogleTodo(elem.id)}
                />
                <p
                  style={{
                    textDecoration: elem.completed ? "line-through" : "none",
                  }}
                >
                  {elem.text}
                </p>
              </div>

              <div className={styles["button-group"]}>
                {elem.isEdit ? (
                  <>
                    <button className={styles["active-btn"]}>
                      Подтвердить
                    </button>
                    <button className={styles["active-btn"]}>Отменить</button>
                  </>
                ) : (
                  <>
                    <button className={styles["active-btn"]}>
                      Редактировать
                    </button>
                    <button className={styles["active-btn"]}>Удалить</button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
