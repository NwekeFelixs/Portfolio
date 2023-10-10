import React from 'react';
import '../css/style.css'; // Import your CSS file
import { IonIcon } from '@ionic/react';
import blogImage1 from '../img/blog-1.jpg';
import blogImage2 from '../img/blog-2.jpg';

const BlogSection = () => {
  return (
    <section className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <p className="section-subtitle" id="blog-label">
          Recent Articles
        </p>
        <h2 className="h2 section-title">Latest News</h2>
        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 700, '--height': 470 }}>
                <img
                  src={blogImage1}
                  width="700"
                  height="470"
                  loading="lazy"
                  alt="Get Started With Tiktok Ads."
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <time className="time" dateTime="2022-06-24">
                  <span className="span text-lg">24</span>
                  June 2022
                </time>
                <div>
                  <h3 className="h3 card-title">Get Started With Tiktok Ads.</h3>
                  <p className="card-text">
                    Phasellus et lacus suscipit congue nis in the miss mine one miss the drana risus in tincidunt
                    ornare.
                  </p>
                  <a href="#" className="btn has-before">
                    <span className="span">Read more</span>
                    <IonIcon name="arrow-forward"></IonIcon>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="blog-card">
              <figure className="card-banner img-holder" style={{ '--width': 700, '--height': 470 }}>
                <img
                  src={blogImage2}
                  width="700"
                  height="470"
                  loading="lazy"
                  alt="UX in Ecommerce – 5 things to avoid."
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <time className="time" dateTime="2022-06-27">
                  <span className="span text-lg">27</span>
                  June 2022
                </time>
                <div>
                  <h3 className="h3 card-title">UX in Ecommerce – 5 things to avoid.</h3>
                  <p className="card-text">
                    Phasellus et lacus suscipit congue nis in the miss mine one miss the drana risus in tincidunt
                    ornare.
                  </p>
                  <a href="#" className="btn has-before">
                    <span className="span">Read more</span>
                    <IonIcon name="arrow-forward"></IonIcon>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
