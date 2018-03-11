import React, { Component } from 'react';
import footerImg from '../img/footer.png';
import StyleSheet from '../index.css';

const Footer = () =>{
  return(
    <div>
      <div className="img-container">
        <img src={footerImg} alt="FooterImg" className="footer"/>
      </div>
    </div>
  )
}

export default Footer;
