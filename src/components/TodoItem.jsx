import { useState } from "react";
import styles from "./styles.module.css";
function TodoItem({
  elem,
  toggleTodo,
  saveTodo,

  deleteTodo,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(elem.text);
  const save = () => {
    saveTodo(elem.id, value);
    setIsEdit(false);
  };
  const cancel = () => {
    setValue(elem.text);
    setIsEdit(false);
  };
  return (
    <div key={elem.id} className={styles["todo-elem"]}>
      <div className={styles["todo-value"]}>
        <input
          type="checkbox"
          checked={elem.completed}
          onChange={() => toggleTodo(elem.id)}
        />
        <div
          style={{
            textDecoration: elem.completed ? "line-through" : "none",
          }}
        >
          {isEdit ? (
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <p>{elem.text}</p>
          )}
        </div>
      </div>

      <div className={styles["button-group"]}>
        {isEdit ? (
          <>
            <button onClick={save} className={styles["active-btn"]}>
              Подтвердить
            </button>
            <button onClick={cancel} className={styles["active-btn"]}>
              Отменить
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEdit(true)}
              className={styles["active-btn"]}
            >
              Редактировать
            </button>
            <button
              onClick={() => deleteTodo(elem.id)}
              className={styles["active-btn"]}
            >
              Удалить
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
