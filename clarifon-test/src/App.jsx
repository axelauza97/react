import "./App.css";
import clarifonLogo from "./assets/clarifon.svg";
import mcafeeLogo from "./assets/mcafee.svg";
import nortonLogo from "./assets/norton.svg";
import checkLogo from "./assets/check.svg";
import checkBlue from "./assets/checkBlue.svg";
import starLogo from "./assets/star.svg";
import visaLogo from "./assets/visaCard.svg";
import lockLogo from "./assets/lock.svg";
import satisfactionLogo from "./assets/satisfaction.svg";

import productImg from "./assets/image4.png";
import { Header } from "./components/Header";
import clarifonImg from "./assets/clarifonCard.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="logoSection">
          <img className="logoImg" src={clarifonLogo} alt="" />
          <img className="logoImg" src={mcafeeLogo} alt="" />
          <img className="logoImg" src={nortonLogo} alt="" />
        </section>
        <section>
          <h1 className="progressTitle">
            Wait! Your Order In
            <br /> Progress
          </h1>
          <p className="progressDescription">
            Lorem Ipsum Dolor Sit Amet. Consectetur
          </p>
        </section>
        <section className="progressSection">
          <aside>
            <img className="checkImg" src={checkLogo} alt="" />
            <p className="checkDescription">Cart Review</p>
          </aside>
          <aside>
            <img className="checkImg" src={checkLogo} alt="" />
            <p className="checkDescription">Checkout</p>
          </aside>
          <aside>
            <img className="checkImg" src={checkLogo} alt="" />
            <p className="checkDescription">Special Offer</p>
          </aside>
          <aside>
            <img className="checkImg" src={checkLogo} alt="" />
            <p className="checkDescription">Confirmation</p>
          </aside>
        </section>

        <section className="productSection">
          <h2 className="productPromotion">
            <span className="productPromotionBlue">ONE TIME ONLY</span> special
            price for 6 extra Clarifion for only
            <span className="productPromotionBlue"> $14 each </span>($84.00
            total!)
          </h2>
          <img src={productImg} alt="Product" className="productImg" />
        </section>
        <section className="productCard">
          <img src={clarifonImg} alt="Product" className="productCardImage" />
          <h3 className="productCardTitle">Clarifion Air Ionizer</h3>
          <p className="productCardPrice">
            <span className="productCardPrice">$180</span>
            <span className="productCardPriceFinal">$84</span>
          </p>
          <p className="productCardStars">
            <img src={starLogo} alt="" className="productCardStarsImg" />
            <img src={starLogo} alt="" className="productCardStarsImg" />
            <img src={starLogo} alt="" className="productCardStarsImg" />
            <img src={starLogo} alt="" className="productCardStarsImg" />
            <img src={starLogo} alt="" className="productCardStarsImg" />
          </p>
          <p className="productCardStock">
            <input type="radio" />
            12 left in stock
          </p>
        </section>
        <section className="productDescriptionSection">
          <p className="productDescriptionP">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
          <ul className="productDescriptionList">
            <li className="productDescriptionItem">
              <img
                className="productDescriptionImg"
                src={checkBlue}
                alt="Check"
              />
              Negative Ion Technology may help with allergens
            </li>
            <li className="productDescriptionItem">
              <img
                className="productDescriptionImg"
                src={checkBlue}
                alt="Check"
              />
              Designed for air rejuvenation
            </li>
            <li className="productDescriptionItem">
              <img
                className="productDescriptionImg"
                src={checkBlue}
                alt="Check"
              />
              Perfect for every room in all types of places.
            </li>
          </ul>
        </section>
        <section className="saveSection">
          <p className="savePercentage">%</p>
          <p>
            Save <span className="blueSave">53%</span> and get
            <span className="blueSave"> 6 extra Clarifision</span> for only
            <span className="blueSave"> $14 Each.</span>
          </p>
        </section>
        <p className="discountContainer">
          <button className="discountButton">YES - CLAIM THE DISCOUNT </button>
        </p>
        <section className="paymentSection">
          <aside className="paymentTable">
            <p className="paymentShipping">Free Shipping</p>
            <p className="paymentSecure">
              <img src={lockLogo} alt="" className="paymentSecureLogo" />
              Secure 256-Bit SSL Encription
            </p>
            <p className="paymentCards">
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
              <img src={visaLogo} alt="" className="" />
            </p>
          </aside>
          <p className="paymentDont">NO THANKS, I DONT WANT THIS</p>
          <aside className="satisfactionAside">
            <img src={satisfactionLogo} />
            <p>
              If you are not completely thrilled with your Clarifion - We have a
              30 day satisfaction guarantee. Please refer to our return policy
              at the bottom of the page for more details. Happy Shopping!
            </p>
          </aside>
        </section>
        <footer className="footerSection">
          <p className="footerSectionCopy">Copyright (c) 2023</p>
          <p className="footerSectionEmail">Clarifionsupport@clarifion.com</p>
          <p className="footerSectionSecure">
            <img src={lockLogo} alt="" className="paymentSecureLogo" />
            Secure 256-bit SSL encryption.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
