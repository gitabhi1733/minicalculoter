import styles from "./App.module.css";

const BUTTON = ({ name, onbuttonclick }) => {
  return (
    <div className={styles.buttoncontainer}>
      {name.map((item) => (
        <button
          key={item}
          className={styles.button}
          onClick={() => onbuttonclick(item)}
        >
          {item}{" "}
        </button>
      ))}
    </div>
  );
};
export default BUTTON;
