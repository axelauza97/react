import "./App.css";
import clarifonLogo from "./assets/clarifon.svg";
import mcafeeLogo from "./assets/mcafee.svg";
import nortonLogo from "./assets/norton.svg";

import checkBlue from "./assets/checkBlue.svg";
import starLogo from "./assets/star.svg";
import visaLogo from "./assets/visaCard.svg";
import lockLogo from "./assets/lock.svg";
import satisfactionLogo from "./assets/satisfaction.svg";
import verfiedLogo from "./assets/verfied.svg";
import avatarLogo from "./assets/avatar.svg";

import productImg from "./assets/image4.png";
import { Header } from "./components/Header";
import clarifonImg from "./assets/clarifonCard.png";
import { ProgressSection } from "./components/ProgressSection";
import { Footer } from "./components/Footer";

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
            <br className="progressBreakLine" /> Progress
          </h1>
          <p className="progressDescription">
            Lorem Ipsum Dolor Sit Amet. Consectetur
          </p>
        </section>
        <ProgressSection />

        <section className="productDesktop">
          <section className="productSection">
            <h2 className="productPromotion">
              <span className="productPromotionBlue">ONE TIME ONLY</span>{" "}
              special price for 6 extra Clarifion for only
              <span className="productPromotionBlue"> $14 each </span>($84.00
              total!)
            </h2>
            <img src={productImg} alt="Product" className="productImg" />
          </section>
          <section className="productCard">
            <h2 className="productPromotion productCardMobile">
              <span className="productPromotionBlue">ONE TIME ONLY</span>{" "}
              special price for 6 extra Clarifion for only
              <span className="productPromotionBlue"> $14 each </span>($84.00
              total!)
            </h2>
            <img src={clarifonImg} alt="Product" className="productCardImage" />
            <h3 className="productCardTitle">Clarifion Air Ionizer</h3>
            <p className="productCardPrice">
              <span className="productCardPriceInitial">$180</span>
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
              <input type="radio" id="stockRadio" />
              <label htmlFor="stockRadio">12 left in stock</label>
            </p>
            <p className="productCardDescription">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </section>
          <section className="productDescriptionSection">
            <p className="productDescriptionP">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
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
            <p className="saveDescription">
              Save <span className="blueSave">53%</span> and get
              <span className="blueSave"> 6 extra Clarifision</span> for only
              <span className="blueSave"> $14 Each.</span>
            </p>
          </section>
          <p className="discountContainer">
            <button className="discountButton">YES - CLAIM MY DISCOUNT </button>
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
              <img src={satisfactionLogo} alt="" />
              <p>
                If you are not completely thrilled with your Clarifion - We have
                a 30 day satisfaction guarantee. Please refer to our return
                policy at the bottom of the page for more details. Happy
                Shopping!
              </p>
            </aside>
          </section>

          <section className="reviewSection">
            <aside className="reviewAvatar">
              <img src={avatarLogo} alt="" className="avatarImg" />
              <div className="reviewStars">
                <img src={starLogo} alt="" className="productCardStarsImg" />
                <img src={starLogo} alt="" className="productCardStarsImg" />
                <img src={starLogo} alt="" className="productCardStarsImg" />
                <img src={starLogo} alt="" className="productCardStarsImg" />
                <img src={starLogo} alt="" className="productCardStarsImg" />
              </div>
              <p className="reviewName">
                Ken T. <img src={verfiedLogo} alt="" />
                <span className="reviewVerified">Verified Customer</span>
              </p>
            </aside>
            <p>
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </section>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
