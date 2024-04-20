import styles from "./footer.module.css";

export default function Footer({ totalTodos, totalCompleted }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total tasks {totalTodos}</span>
      <span className={styles.item}>Total Completed {totalCompleted}</span>
    </div>
  );
}
