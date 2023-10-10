import React from 'react';
import '../css/style.css'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in touch</p>
          </li>
          <li>
            <a href="mailto:info@Feylicks.com" className="footer-link">info@Feylicks.com</a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Locations</p>
          </li>
          <li>
            <a href="#" className="footer-link">Nigeria — Lagos</a>
          </li>
        </ul>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <AiFillGithub/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
                <AiOutlineTwitter/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiOutlineInstagram/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiFillLinkedin/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
