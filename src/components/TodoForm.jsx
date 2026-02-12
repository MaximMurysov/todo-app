import styles from "./styles.module.css";
function TodoForm({ form, addTodo, setForm }) {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };
  return (
    <div className={styles["add-todo"]}>
      <input
        onKeyDown={handleEnter}
        className={styles.input}
        type="text"
        value={form}
        onChange={(e) => setForm(e.target.value)}
      />
      <button className={styles["add-btn"]} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}
export default TodoForm;
