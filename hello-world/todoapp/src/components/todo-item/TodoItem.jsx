import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(event) {
    event.preventDefault();
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleMarkComplete(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {item.isComplete ? (
          <span
            className={styles.completeTask}
            onClick={() => handleMarkComplete(item.name)}
          >
            {item.name}
          </span>
        ) : (
          <span onClick={() => handleMarkComplete(item.name)}>{item.name}</span>
        )}
        <span>
          <button
            className={styles.deleteButton}
            onClick={(ev) => handleDelete(ev)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
