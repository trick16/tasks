import style from "./style.module.css";
const Sticker = (props) => {
  return (
    <div className={style.sticker}>
      <h4>{props.name}</h4>
      <h5>Need to be done to</h5>
      <span>{props.time}</span>
      <span>{props.date}</span>
      <h5>Description</h5>
      <p>{props.description}</p>
      <h5>Time created</h5>
      <span>{props.timeCreated}</span>
    </div>
  );
};
export default Sticker;
