import React, { useState } from 'react';
import "./laysec3.css";
import taxiImage from "./images/taxi-service.jpg";


const Laysec3 = () => {

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="services-section3">
      <h1>Générer des revenu avec Taxi Driver</h1>
      <div className="top-button">
      {['Chauffeur', 'Livreur', 'Propriétaire de flotte'].map((button) => (
        <span
          key={button}
          onClick={() => handleClick(button)}
          className={`button ${activeButton === button ? 'active' : ''}`}
        >
          {button}
        </span>
      ))}
    </div>
      <div className="services-container3">
        {/* Image */}
        <div className="image-container3">
          <img src={taxiImage} alt="Service de taxi" />
        </div>

        {/* Contenu textuel */}
        <div className="content3">
          <h2>Nos services de transport</h2>

          <div className="services-list">
            <div className="service-item3">
              <span className="number">1</span>
              <div className="text-section3">
                <h3>Transport urbain rapide</h3>
                <p>
                  Déplacez-vous en toute simplicité avec nos chauffeurs professionnels, disponibles 24/7.
                </p>
              </div>
            </div>

            <div className="service-item3">
              <span className="number">2</span>
              <div className="text-section3">
                <h3>Courses longues distances</h3>
                <p>
                  Voyagez confortablement vers d'autres villes avec nos véhicules haut de gamme.
                </p>
              </div>
            </div>

            <div className="service-item3">
              <span className="number">3</span>
              <div className="text-section3">
                <h3>Services VIP & entreprises</h3>
                <p>
                  Profitez de solutions de transport adaptées aux professionnels et aux clients exigeants.
                </p>
              </div>
            </div>
            <button className="cta-button">
                En savoir plus
              </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Laysec3;
