import React, { useEffect, useRef } from 'react';
import './background.css';

const Background = () => {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = videoContainerRef.current;
      const scrollY = window.scrollY;

      if (container) {
        // Appliquer un déplacement en Y basé sur le scroll
        const speedFactor = 0.3; // Plus lent que le scroll
        container.style.transform = `translateY(${scrollY * speedFactor}px)`; // Ajuste le facteur pour des mouvements lents
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="video-section">
      <div ref={videoContainerRef} className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="/images/Suzuki-pub.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>

      <div className="video-content">
        <h1>Bienvenue dans notre section</h1>
        <p>Faites défiler pour voir l'effet de parallaxe !</p>
      </div>
    </section>
  );
};

export default Background;
