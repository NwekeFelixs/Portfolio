import React, { useEffect, useState } from 'react';
import '../css/style.css'; 
import portfolio1 from '../img/portfolio-1.jpg';
import portfolio2 from '../img/portfolio-2.jpg';
import portfolio3 from '../img/portfolio-3.jpg';
import portfolio4 from '../img/portfolio-4.jpg';
import portfolio5 from '../img/portfolio-5.jpg';
import portfolio6 from '../img/portfolio-6.jpg';

const PortfolioSection = () => {
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
          {Array.from({ length: totalSlides }).map((_, index) => (
            <li className={`slider-item ${index === currentSlide ? 'active' : ''}`} key={index}>
              <div className="portfolio-card img-holder" style={{ '--width': 600, '--height': 600 }}>
                <img
                  src={
                    index === 0
                      ? portfolio1
                      : index === 1
                      ? portfolio2
                      : index === 2
                      ? portfolio3
                      : index === 3
                      ? portfolio4
                      : index === 4
                      ? portfolio5
                      : portfolio6
                  }
                  width="600"
                  height="600"
                  loading="lazy"
                  alt="portfolio"
                  className="img-cover"
                />
                <div className="card-content">
                  <h3 className="h3 card-title">Lab. 001</h3>
                  <p className="card-text">Website Design</p>
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
};

export default PortfolioSection;
