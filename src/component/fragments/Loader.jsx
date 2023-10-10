import '../css/style.css'
import React, { useEffect, useState } from 'react';

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preloader = document.querySelector('[data-preloader]');

    // Hide the preloader after 3 seconds
    const timeout = setTimeout(() => {
      preloader.classList.add('loaded');
      document.body.classList.add('loaded');
      setVisible(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return visible ? (
    <div className="preloader" data-preloader>
      <div className="circle"></div>
    </div>
  ) : null;
}

export default Loader;
