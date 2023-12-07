import React from 'react'
import Credit from '../components/Credit';
import LogoAll from '../components/Logo';
import "../style/Footer.scss";

function Footer() {
  return (
    <div className='footer'>
      <LogoAll isInHeader={false}/>
      <Credit/>
    </div>
  )
}

export default Footer;