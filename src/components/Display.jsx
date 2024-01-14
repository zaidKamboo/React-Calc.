import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return (
    <input className={styles.display} value={calVal} type="text" readOnly />
  );
};

export default Display;
