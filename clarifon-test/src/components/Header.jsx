import leftLogo from "../assets/left.svg";
import rightLogo from "../assets/right.svg";
import priceLogo from "../assets/price.svg";
import classes from "./Header.module.css";
export const Header = () => {
  return (
    <header className={classes.header}>
      <section className={classes.headerSlide}>
        <img src={leftLogo} alt="" className={classes.mobile} />
        <section className={classes.headerInfo}>
          <img src={priceLogo} alt="" />
          <p className={classes.headerSlideItem}>
            30-DAY SATISFACTION GUARANTEE
          </p>
        </section>
        <section className={classes.headerInfo + " " + classes.desktop}>
          <img src={priceLogo} alt="" />
          <p className={classes.headerSlideItem}>
            Free delivery on orders over $40.00
          </p>
        </section>
        <section className={classes.headerInfo + " " + classes.desktop}>
          <img src={priceLogo} alt="" />
          <p className={classes.headerSlideItem}>50.000+ HAPPY CUSTOMERS</p>
        </section>
        <section className={classes.headerInfo + " " + classes.desktop}>
          <img src={priceLogo} alt="" />
          <p className={classes.headerSlideItem}>100% Money Back Guarantee</p>
        </section>

        <img src={rightLogo} alt="" className={classes.mobile} />
      </section>
    </header>
  );
};
