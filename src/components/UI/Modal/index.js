import ReactDOM from "react-dom";
import styles from "./style.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal} onClick={props.onClose}>
          {props.children}
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
