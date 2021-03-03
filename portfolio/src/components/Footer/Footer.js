import React from 'react';
import './Footer.modules.scss';
import Logo from '../../images/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={Logo} alt="poblocki dev footer logo" />
      <div className="footer__contact">
        <span className="footer__icon"></span>
        <span className="footer__icon"></span>
      </div>
      <div className="footer__copyrights">
        Copyrights © {new Date().getFullYear()} Jakub Pobłocki. All rights
        reserved
      </div>
    </footer>
  );
};

export default Footer;
