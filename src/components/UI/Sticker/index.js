import style from "./style.module.css";
const Sticker = (props) => {
  return <div className={style.sticker}>{props.children}</div>;
};
export default Sticker;
