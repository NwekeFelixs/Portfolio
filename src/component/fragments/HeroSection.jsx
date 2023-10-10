import React from 'react';
import heroBanner from '../img/hero-banner.jpg';
import { AiOutlineCloudDownload } from 'react-icons/ai';

function HeroSection() {
  return (
    <section className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">FeLix Nweke</h1>
          <p className="hero-subtitle">Creative Web & App Developer</p>
          <div className="hero-banner">
            <img src={heroBanner} width="800" height="800" alt="Kane Williams" className="w-100" />
          </div>
          <p className="section-text">
            Hi, I’m Felix Nweke, and I am a creative web & app developer who dreams of making the world a better place by creating captivating products.
          </p>
          <a href="#" className="btn has-before">
            <span className="span">Download CV</span>
            <AiOutlineCloudDownload/>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
