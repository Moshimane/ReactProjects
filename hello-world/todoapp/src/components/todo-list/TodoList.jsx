import styles from "./todolist.module.css";
import TodoItem from "../todo-item/TodoItem";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.sort((a, b) => a.isComplete - b.isComplete);
  return (
    <div className={styles.listContainer}>
      {sortedTodos.map((item, idx) => (
        <TodoItem key={idx} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
