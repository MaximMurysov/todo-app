import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        <TodoForm form={form} addTodo={addTodo} setForm={setForm} />
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
