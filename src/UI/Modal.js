import styles from "./Modal.module.css";
const Modal = (props) => {
  const userCloseHandler = (event) => {
    event.preventDefault();
    props.onHide(false);
  };

  return (
    <form>
      <div className={`${styles["modal"]}  ${props.show && styles.show}`}>
        <div className={`${styles["modal-content"]}`}>
          <span onClick={userCloseHandler} className={`${styles["close"]}`}>
            &times;
          </span>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </form>
  );
};
export default Modal;
