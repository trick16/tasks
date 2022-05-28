import clsx from "clsx";
import styles from "./style.module.css";

const Input = (props) => {
  return <input {...props} className={clsx(styles.input, props.className)} />;
};
export default Input;
