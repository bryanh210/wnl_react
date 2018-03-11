import React, { Component } from 'react';
import bannerImg from '../img/banner.png';
import StyleSheet from '../index.css';
import footerImg from '../img/footer.png';

const Banner = () =>{
  return(
    <div>
      <div className="img-container">
        <img src={bannerImg} alt="BannerImg" className="banner"/>
      </div>
    </div>
  )
}

export default Banner;
