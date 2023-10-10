import React, { useEffect, useState } from 'react';
import '../css/style.css';
import logo from '../img/logo.svg';

function Header() {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!isNavbarActive);
  };

  useEffect(() => {
    const header = document.querySelector("[data-header]");
  
    const scrollHandler = () => {
      if (window.scrollY >= 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };
  
    // Add scroll event listener with the callback function
    window.addEventListener("scroll", scrollHandler);
  
    // Remove the scroll event listener with the same callback function
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  

  return (
    <header className={`header ${isNavbarActive ? "active" : ""}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} width="170" height="40" alt="Pfolio home" />
        </a>

        <button className={`nav-toggle-btn ${isNavbarActive ? "active" : ""}`} data-nav-toggler onClick={toggleNavbar} aria-label="Toggle menu">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>

        <nav className={`navbar ${isNavbarActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Resume</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Services</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Portfolio</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Blog</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={`overlay ${isNavbarActive ? "active" : ""}`} data-nav-toggler data-overlay onClick={toggleNavbar}></div>
      </div>
    </header>
  );
}

export default Header;
