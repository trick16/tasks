import style from "./style.module.css";
const Sticker = (props) => {
  const headerIsImportant = props.isImportant ? "important" : "";
  const headerIsDone = props.isDone ? "done" : "";

  return (
    <div className={style.sticker}>
      <div className={style.close} onClick={props.onClose}>
        X
      </div>
      <h4 className={`${style[headerIsDone]} ${style[headerIsImportant]}`}>
        {props.color && (
          <span
            className={style.dot}
            style={{ backgroundColor: props.color }}
          ></span>
        )}
        {headerIsImportant && <span>! </span>}
        {props.name}
      </h4>
      <h5>Need to be done due:</h5>
      <p>{props.time}</p>
      <p>{props.date}</p>
      {props.description && <h5>Description:</h5>}
      {props.description && <p>{props.description}</p>}
      <h5>Time created:</h5>
      <p>{props.created}</p>
    </div>
  );
};
export default Sticker;
