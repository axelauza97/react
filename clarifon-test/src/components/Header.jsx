import leftLogo from "../assets/left.svg";
import rightLogo from "../assets/right.svg";
import priceLogo from "../assets/price.svg";
import freeDeliveryLogo from "../assets/freeDelivery.svg";
import happyCustomersLogo from "../assets/happyCustomers.svg";
import moneyBackLogo from "../assets/moneyBack.svg";
import classes from "./Header.module.css";
import { useEffect, useState } from "react";
export const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const changeOption = setInterval(() => {
      setCurrent((prev) => (prev > 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(changeOption);
  }, [current, setCurrent]);
  const addCurrent = () => {
    setCurrent((prev) => (prev > 2 ? 0 : prev + 1));
  };
  const decreaseCurrent = () => {
    setCurrent((prev) => (prev < 1 ? 3 : prev - 1));
  };
  return (
    <header className={classes.header}>
      <section className={classes.headerSlide}>
        <img
          src={leftLogo}
          alt=""
          className={classes.mobile}
          onClick={decreaseCurrent}
        />
        <section
          className={
            classes.headerInfo + " " + (current != 0 ? classes.desktop : "")
          }
        >
          <img src={priceLogo} alt="" />
          <p className={classes.headerSlideItem}>
            30-DAY SATISFACTION GUARANTEE
          </p>
        </section>
        <section
          className={
            classes.headerInfo + " " + (current != 1 ? classes.desktop : "")
          }
        >
          <img src={freeDeliveryLogo} alt="" />
          <p className={classes.headerSlideItem}>
            Free delivery on orders over $40.00
          </p>
        </section>
        <section
          className={
            classes.headerInfo + " " + (current != 2 ? classes.desktop : "")
          }
        >
          <img src={happyCustomersLogo} alt="" />
          <p className={classes.headerSlideItem}>50.000+ HAPPY CUSTOMERS</p>
        </section>
        <section
          className={
            classes.headerInfo + " " + (current != 3 ? classes.desktop : "")
          }
        >
          <img src={moneyBackLogo} alt="" />
          <p className={classes.headerSlideItem}>100% Money Back Guarantee</p>
        </section>

        <img
          src={rightLogo}
          alt=""
          className={classes.mobile}
          onClick={addCurrent}
        />
      </section>
    </header>
  );
};
