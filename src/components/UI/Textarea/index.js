import styles from "./style.module.css";

const Textarea = (props) => {
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <textarea {...props}></textarea>
    </div>
  );
};
export default Textarea;
