import clsx from "clsx";
import styles from "./style.module.css";

const Input = (props) => {
  return (
    <div className={styles.containter}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} className={clsx(styles.input, props.className)} />
    </div>
  );
};
export default Input;
