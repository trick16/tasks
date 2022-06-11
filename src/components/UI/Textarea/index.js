import styles from "./style.module.css";

const Textarea = (props) => {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <textarea {...props}></textarea>
    </div>
  );
};
export default Textarea;
