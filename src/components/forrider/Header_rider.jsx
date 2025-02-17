
import React from 'react';
import header_rider1 from '../../assets/images/header_rider1.jpeg';
import header_rider4 from '../../assets/images/route1.jpg';
import header_rider3 from '../../assets/images/route2.jpg';
import "./header_rider.css"

function Header_rider() {
  return (
    <div className="section-header-rider">
   <div className="services-section">
    <div className="services-header">
        <h4>/// CE QUE NOUS OFFRONS</h4>
        <h1>Commencez votre voyage avec <br /> la compagnie de taxi Rider !</h1>
        <p>Nous relevons avec succès des tâches de complexité variable, offrons des garanties à long terme et maîtrisons régulièrement de nouvelles technologies.</p>
    </div>
    <div className="header-cards">
    <div className="header-rider-card">
        <img src={header_rider1} alt="Local Transport" />
        <div className="card-content">
            <h3>Transport Local</h3>
            <p>Commander un taxi n'a jamais été aussi simple et rapide.</p>
            <button>Lire la suite</button>
        </div>
    </div>
    <div className="header-rider-card">
        <img src={header_rider4} alt="Business Transport" />
        <div className="card-content">
            <h3>Transport d'Affaires</h3>
            <p>Des trajets confortables et ponctuels pour vos rendez-vous pro.</p>
            <button>Lire la suite</button>
        </div>
    </div>
    <div className="header-rider-card">
        <img src={header_rider3} alt="City Transport" />
        <div className="card-content">
            <h3>Transport Urbain</h3>
            <p>Déplacez-vous facilement en ville sans attendre.</p>
            <button>Lire la suite</button>
        </div>
    </div>
</div>

</div>
    </div>
  );
}

export default Header_rider;