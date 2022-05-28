import clsx from "clsx";
import style from "./style.module.css";

const Title = (props) => {
  return (
    <h1 {...props} className={clsx(style.className, props.className)}>
      {props.children}
    </h1>
  );
};
export default Title;
