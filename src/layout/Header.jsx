import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoAll from '../components/Logo';
import "../style/Header.scss";

function Header () {
  return (
    <nav className='header'>
      <LogoAll isInHeader={true} />
      <div className='header_navbar'>
        <NavLink to='/' className="header_homepage_link">Accueil</NavLink>
        
        <NavLink to='/about' className="header_homepage_link">À Propos</NavLink>
      </div>
    </nav>
  )
}

export default Header;