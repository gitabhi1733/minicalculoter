import styles from "./App.module.css";
function Display({ displayvalue }) {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayvalue}
      readOnly
    />
  );
}
export default Display;
