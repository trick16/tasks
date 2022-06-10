import clsx from "clsx";
import styles from "./style.module.css";

const Input = (props) => {
  return (
    <div classNamae={styles.containter}>
      {props.label && <label for={props.labelFor}>{props.label}</label>}
      <input
        {...props}
        id={props.labelFor}
        className={clsx(styles.input, props.className)}
      />
    </div>
  );
};
export default Input;
