import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';

import '../css/style.css';

function ServiceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const serviceItems = [
    {
      title: 'Website Design',
      description: 'Your website description here',
    },
    {
      title: 'SEO Marketing',
      description: 'Your SEO marketing description here',
    },
    {
      title: 'eCommerce',
      description: 'Your eCommerce description here',
    },
    {
      title: 'Graphic Design',
      description: 'Your graphic design description here',
    },
    {
      title: 'Digital Marketing',
      description: 'Your digital marketing description here',
    },
    {
      title: 'Social Media',
      description: 'Your social media description here',
    },
  ];
  const slideNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === serviceItems.length - 1 ? 0 : prevSlide + 1));
  };

  const slidePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? serviceItems.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const sliderInterval = setInterval(slideNext, 5000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <section className="service" aria-labelledby="service-label">
      <div className="slider" data-slider>
        <ul className="slider-container service-list" data-slider-container>
          {serviceItems.map((item, index) => (
            <li className={`slider-item ${index === currentSlide ? 'active' : ''}`} data-slider-item key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <IonIcon name={item.iconName} />
                </div>
                <h3 className="h3 card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                <span className="text-lg card-number">{index + 1}</span>
                <a href="#" className="layer-link" aria-label={`More about my ${item.title} service`} />
              </div>
            </li>
          ))}
        </ul>
        <div className="slider-controls">
          <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item" onClick={slidePrev}>
            <div className="line"></div>
            <div className="arrow"></div>
          </button>
          <button className="slider-control next" data-slider-next aria-label="Slide to next item" onClick={slideNext}>
            <div className="line"></div>
            <div className="arrow"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
