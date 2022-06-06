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
            <span onClick={userCloseHandler} className={`${styles["close"]}`}>&times;</span>
          <p>The age must be greater than 0</p>
        </div>
      </div>
    </form>
  );
};
export default Modal;
