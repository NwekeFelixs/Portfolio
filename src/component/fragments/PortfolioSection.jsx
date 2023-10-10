import React, { useState, useEffect } from 'react';

import '../css/style.css';
import portfolio1 from '../img/portfolio-1.jpg';
import portfolio2 from '../img/portfolio-2.jpg';
import portfolio3 from '../img/portfolio-3.jpg';
import portfolio4 from '../img/portfolio-4.jpg';
import portfolio5 from '../img/portfolio-5.jpg';
import portfolio6 from '../img/portfolio-6.jpg';

function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  const portfolioItems = [
    {
      title: 'Lab. 001',
      description: 'Website Design',
      image: portfolio1, 
    },
    {
      title: 'Lab. 002',
      description: 'Mobile App Design',
      image: portfolio2, 
    },
    {
      title: 'Lab. 003',
      description: 'Graphic Design',
      image: portfolio3, 
    },
    {
      title: 'Lab. 004',
      description: 'eCommerce Website',
      image: portfolio4, 
    },
    {
      title: 'Lab. 005',
      description: 'UI/UX Design',
      image: portfolio5, 
    },
    {
      title: 'Lab. 006',
      description: 'Digital Marketing',
      image: portfolio6, 
    },
  ];

  return (
    <section className="portfolio" aria-labelledby="portfolio-label">
      <div className="title-wrapper container">
        <div>
          <p className="section-subtitle" id="portfolio-label">
            Our Works
          </p>
          <h2 className="h2 section-title">Portfolio</h2>
        </div>
        <p className="section-text">
          Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
          velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus ornare.
        </p>
      </div>
      <div className="slider" data-slider>
        <ul className="slider-container" data-slider-container>
          {portfolioItems.map((item, index) => (
            <li className={`slider-item ${index === currentSlide ? 'active' : ''}`} key={index}>
              <div className="portfolio-card img-holder" style={{ '--width': 600, '--height': 600 }}>
                <img src={item.image} width="600" height="600" loading="lazy" alt="portfolio" className="img-cover" />
                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
                <a href="#" className="layer-link"></a>
              </div>
            </li>
          ))}
        </ul>
        <div className="slider-controls">
          <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item" onClick={prevSlide}>
            <div className="line"></div>
            <div className="arrow"></div>
          </button>
          <button className="slider-control next" data-slider-next aria-label="Slide to next item" onClick={nextSlide}>
            <div className="line"></div>
            <div className="arrow"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
