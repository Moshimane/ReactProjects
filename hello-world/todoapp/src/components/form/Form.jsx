import styles from "./form.module.css";
import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", isComplete: false });
  function handleSubmit(event) {
    event.preventDefault();

    if (
      todo.name.length > 0 &&
      todos.filter((x) => x.name === todo.name).length === 0
    ) {
      setTodos([...todos, todo]);
    }

    setTodo({ name: "", isComplete: false });
  }

  return (
    <form className={styles.todoForm}>
      <div className={styles.inputContainer}>
        <input
          className={styles.myInput}
          type="text"
          value={todo.name}
          onChange={(ev) =>
            setTodo({ name: ev.target.value, isComplete: false })
          }
          placeholder="Add a new todo"
        />
        <button
          className={styles.myButton}
          type="submit"
          onClick={(ev) => handleSubmit(ev)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
