import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/*<div className="brand" >
                    <h4 className="brand__name">Bewakoof</h4>
                </div>
                <div className="company__description">
                    <div className="footer__des__col">
                        <h6 className="footer__des__col__heading">CUSTOMER SERVICE</h6>
                        <p className="subeading">Contact Us</p>
                        <p className="subeading">Track Order</p>
                        <p className="subeading">Return Order</p>
                        <p className="subeading">Use Order</p>
                    </div>
                    <div className="footer__des__col">
                        <h6 className="footer__des__col__heading">COMPANY</h6>
                    </div>
                    <div className="footer__des__col">
                        <h6 className="footer__des__col__heading">CONNECT WITH US</h6>
                    </div>
                    <div className="footer__des__col">
                        <h6 className="footer__des__col__heading">KEEP UP TO DATE</h6>
                    </div>
                </div>*/}
        <img className="footer__image" src={require("./footer.PNG")} />
      </div>
    </footer>
  );
};

export default Footer;
