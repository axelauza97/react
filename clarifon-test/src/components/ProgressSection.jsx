import checkLogo from "../assets/check.svg";
import style from "./ProgressSection.module.css";
export const ProgressSection = () => {
  return (
    <section className={style.progressSection}>
      <aside className={style.progressAside}>
        <img className={style.checkImg} src={checkLogo} alt="" />
        <p className={style.checkDescription}>
          <span className={style.checkStep}>Step 1: </span> Cart Review
        </p>
      </aside>
      <aside className={style.progressAside}>
        <img className={style.checkImg} src={checkLogo} alt="" />
        <p className={style.checkDescription}>
          <span className={style.checkStep}>Step 2: </span> Checkout
        </p>
      </aside>
      <aside className={style.progressAside}>
        <img className={style.checkImg} src={checkLogo} alt="" />
        <p className={style.checkDescription}>
          <span className={style.checkStep}>Step 3: </span> Special Offer
        </p>
      </aside>
      <aside className={style.progressAside}>
        <img className={style.checkImg} src={checkLogo} alt="" />
        <p className={style.checkDescription}>
          <span className={style.checkStep}>Step 4: </span> Confirmation
        </p>
      </aside>
    </section>
  );
};
