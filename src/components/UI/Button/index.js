import clsx from "clsx";
import styles from "./style.module.css";

const Button = (props) => {
  return <button {...props} className={clsx(styles.button, props.className)} />;
};
export default Button;
