import React, { useState } from 'react';
import "./laysec4.css"
import app_image from "./images/app_image.png";


function Laysec4() {

     const [activeButton, setActiveButton] = useState(null);
    
      const handleClick = (button) => {
        setActiveButton(button);
      };

  return (
    <div className='laysec4-cont'>
        <h1>Télecharger l'appli <span className='higlight'>Taxi-driver</span></h1>
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
        <div className='laysec4-main'>
            <div className='text-content-laysec4'>
                <h1>Quelques secondes pour commander et quelques minutes pour arriver</h1>
                <p>Disponibles pour les appareils IOS et Android</p>
                <button>Télécharger l'appli</button>
            </div>
            <div className='image-container-laysec4'>
                <div className='section4-image'>
                    <img src={app_image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Laysec4