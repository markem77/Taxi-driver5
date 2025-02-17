import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      {/* Left Section - Form */}
      <div className="form-section">
        <h1 className="title">Allez où vous voulez avec <span className="highlight">Taxi Driver</span></h1>
        <div className="form-group">
          <input 
            type="text" 
            placeholder="Lieu de prise en charge" 
            className="input-field"
          />
          <input 
            type="text" 
            placeholder="Destination" 
            className="input-field"
          />
          <div className="button-group">
            <button className="option-button">🗓️ Aujourd'hui</button>
            <button className="option-button">🕒 Maintenant ▼</button>
          </div>
          <button className="price-button">
            Voir les prix
          </button>
        </div>
      </div>

      {/* Right Section - Map Placeholder */}
      <div className="map-section">
        <iframe 
          className="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509597!2d144.95373531531844!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777f2e0b8a0c0!2sUber!5e0!3m2!1sen!2sau!4v1617763934609!5m2!1sen!2sau" 
          allowFullScreen="" 
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Header;
