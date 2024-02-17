// ScrollToTopButton.js

import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 100); // Muestra el botón cuando el scroll es superior a 100px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/ffffff/collapse-arrow.png" alt="collapse-arrow"/>
    </button>
  );
};

export default ScrollTop;
