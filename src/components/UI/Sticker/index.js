import style from "./style.module.css";
const Sticker = (props) => {
  const headerIsImportant = props.isImportant ? "important" : "";
  const headerIsDone = props.isDone ? "done" : "";

  return (
    <div className={style.sticker}>
      <h4 className={`${style[headerIsDone]} ${style[headerIsImportant]}`}>
        {headerIsImportant && <span>! </span>}
        {props.name}
      </h4>
      <h5>Need to be done due:</h5>
      <p>{props.time}</p>
      <p>{props.date}</p>
      <h5>Description:</h5>
      <p>{props.description}</p>
      <h5>Time created:</h5>
      <p>{props.created}</p>
    </div>
  );
};
export default Sticker;
