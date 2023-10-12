import leftLogo from "../assets/left.svg";
import rightLogo from "../assets/right.svg";
import priceLogo from "../assets/price.svg";
export const Header = () => {
  return (
    <header className="headerSlide">
      <img src={leftLogo} alt="" />
      <section className="headerInfo">
        <img src={priceLogo} alt="" />
        <p className="headerSlideItem">30-DAY SATISFACTION GUARANTEE</p>
      </section>
      <img src={rightLogo} alt="" />
    </header>
  );
};
