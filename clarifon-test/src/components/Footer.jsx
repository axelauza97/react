import lockLogo from "../assets/lock.svg";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <section className={style.footerSection}>
        <p className={style.footerSectionCopy}>Copyright (c) 2023</p>
        <p className={style.footerSectionEmail}>
          Clarifionsupport@clarifion.com
        </p>
        <p className={style.footerSectionSecure}>
          <img
            src={lockLogo}
            alt=""
            className={style.paymentSecureLogo}
            loading="lazy"
          />
          Secure 256-bit SSL encryption.
        </p>
      </section>
    </footer>
  );
};
