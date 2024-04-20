import { useState } from "react";
import Form from "../form/Form";
import TodoList from "../todo-list/TodoList";
import Footer from "../footer/Footer";
import styles from "./todo.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const totalCompleted = todos.filter((x) => x.isComplete).length;
  const totalTodos = todos.filter((x) => !x.isComplete).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodos={totalTodos} totalCompleted={totalCompleted} />
    </div>
  );
}
