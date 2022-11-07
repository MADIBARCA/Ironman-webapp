import "./Footer.css";

import { footerMenu, footerSocial } from "./footerLinks.data";

import IronmanLogo from "../../assets/footer/ironman-logo.png";
import NftLabs from "../../assets/footer/nft-labs.png";

const Footer = ({ contactRef }) => {
  return (
    <section className="footerSection" ref={contactRef}>
      <div className="defaultContainer">
        <div className="footerContainer">
          <img src={IronmanLogo} className="footerLogo" />

          <div className="footerMenu">
            {footerMenu.map((el, i) => (
              <a href={el.link} key={i}>
                {el.name}
              </a>
            ))}
          </div>
          <div className="footerSocial">
            {footerSocial.map((el, i) => (
              <a href={el.link} key={i}>
                <img src={el.img} />
              </a>
            ))}
          </div>
          <p>Ironman Inc. Copyright © 2022-2023</p>
        </div>
      </div>
      <div className="footerBottom">
        Powered by
        <img src={NftLabs} />
      </div>
    </section>
  );
};

export default Footer;
