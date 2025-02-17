import React from 'react'
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import driverMain from "../../assets/images/driversec2.jpeg"; // Image principale
import driverSmall from "../../assets/images/driversec3.jpeg"; // Petite image
import "./driversec2.css"


function Driversec2() {
  return (
    <section className="driver-benefits">
    {/* Partie texte */}
    <div className="sec2-content">
      <h3 className="sec2-subtitle">POURQUOI NOUS REJOINDRE ?</h3>
      <h2 className="sec2-title">Devenez Conducteur et Profitez d'Avantages Uniques !</h2>
      <p className="sec2-description">
        Rejoindre Taxi Driver, c'est bénéficier d'un service fiable et sécurisé qui met 
        en avant le bien-être des chauffeurs et leur offre les meilleures opportunités. 
        Découvrez comment nous vous aidons à maximiser vos revenus et à résoudre les défis quotidiens.
      </p>

      <ul className="benefits-list">
        <li><FaCheckCircle className="icon" /> Revenus garantis avec des courses régulières</li>
        <li><FaCheckCircle className="icon" /> Flexibilité totale : roulez quand vous voulez</li>
        <li><FaCheckCircle className="icon" /> Assistance 24/7 en cas de besoin</li>
        <li><FaCheckCircle className="icon" /> Accès à des primes et bonus attractifs</li>
        <li><FaCheckCircle className="icon" /> Une application intuitive et facile à utiliser</li>
        <li><FaCheckCircle className="icon" /> Sécurité et protection assurées pour tous nos chauffeurs</li>
      </ul>

      <div className="contact">
        <div className="call-box">
          <FaPhoneAlt className="phone-icon" />
          <p className="phone-number">+33 6 12 34 56 78</p>
        </div>
      </div>
    </div>

    {/* Partie image */}
    <div className="image-container">
      <img src={driverMain} alt="Chauffeurs en réunion" className="driver-image" />
      
      {/* Petite image superposée */}
      <div className="small-image">
        <img src={driverSmall} alt="Chauffeurs en formation" />
      </div>

      {/* Expérience box */}
      <div className="experience-box">
        <span className="years">+5 Ans</span>
        <p className="experience-text">D'expérience en transport privé</p>
      </div>
    </div>
  </section>
  )
}

export default Driversec2