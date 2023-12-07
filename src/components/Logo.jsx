import React from 'react';
import logoInHeader from "../images/logo.svg";
import logoInFooter from "../images/LogoFooter.svg";
import { Link } from 'react-router-dom';

function LogoAll({ isInHeader }) {
  const logoSource = isInHeader ? logoInHeader : logoInFooter;

  return (
    <div className={`logo ${isInHeader ? 'header-logo' : 'footer-logo'}`}>
      <Link to='/'>
        <img className="logo" src={logoSource} alt="logo Kasa" />
      </Link>
    </div>
  );
}

export default LogoAll;
