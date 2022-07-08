import React from "react";
import Copyright from "./Copyright";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div className="footer">
      <FooterLogo />
      <FooterMenu />
      <Copyright />
    </div>
  );
};

export default Footer;
