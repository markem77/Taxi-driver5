import React from "react";
import "./laysec2.css";
import laysec2 from "../../assets/images/header_layout2.jpeg";  
import redcar1 from "./images/redcar1.png";  
import blackcar1 from "./images/blackcar1.png";  
import whitecar1 from "./images/whitecar1.png";  
import whitecar2 from "./images/whitecar2.png"; 
import {FaClock , FaRocket } from 'react-icons/fa';


const Laysec2 = () => {
  const services = [
    { title: "Attendez et économisez", icon: <FaClock /> },
    { title: "Départ prioritaire", icon: <FaRocket /> },
  ]


  return (
    <section className="laysec2-cont">
      <div className="services-container1">
        <div className="text-content">
          <h2>Rejoignez notre équipe</h2>
          <p>
            Découvrez nos solutions uniques qui allient performance, sécurité, et flexibilité. Notre
            plateforme vous permet de devenir conducteurs, investisseurs ou partenaires.
          </p>
          <button>En savoir plus</button>
        </div>

        <div className="laysec2img">
          <img src={laysec2} alt="Nos Services" />
        </div>
      </div>

      <div className="titre-services-grid" >
        <h1>Nos Prestations sur Mesure</h1>
        <p>Nos Prestations sur Mesure" évoque l'idée de services personnalisés et haut de gamme</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h3>Attendez et économisez</h3>
          <div className="cars-picture">
            <img src={whitecar1} alt="Nos Services" />
          </div>
          <div className="car-descrip-menu">
              <div className="car-descrip" >
                <div className="icon"><FaRocket /></div>
                <h3>Attendez et économisez</h3>
              </div>
              <div className="car-descrip">
                <div className="icon">< FaClock/></div>
                <h3>Départ prioritaire</h3>
              </div>
              <button>Réserver cette course</button>
          </div>

        </div>

        <div className="service-card" >
          <h3>Départ prioritaire</h3>
          <div className="cars-picture">
            <img src={redcar1} alt="Nos Services" />
          </div>
          <div className="car-descrip-menu">
              <div className="car-descrip" >
                <div className="icon"><FaRocket /></div>
                <h3>Attendez et économisez</h3>
              </div>
              <div className="car-descrip">
                <div className="icon">< FaClock/></div>
                <h3>Départ prioritaire</h3>
              </div>
              <button>Réserver cette course</button>
          </div>
        </div>

        <div className="service-card" >
          <h3>Extra confort</h3>
          <div className="cars-picture">
            <img src={blackcar1} alt="Nos Services" />
          </div>
          <div className="car-descrip-menu">
              <div className="car-descrip" >
                <div className="icon"><FaRocket /></div>
                <h3>Attendez et économisez</h3>
              </div>
              <div className="car-descrip">
                <div className="icon">< FaClock/></div>
                <h3>Départ prioritaire</h3>
              </div>
              <button>Réserver cette course</button>
          </div>
        </div>

        <div className="service-card" >
          <h3>Transport en commun</h3>
          <div className="cars-picture">
            <img src={whitecar2} alt="Nos Services" />
          </div>
          <div className="car-descrip-menu">
              <div className="car-descrip" >
                <div className="icon"><FaRocket /></div>
                <h3>Attendez et économisez</h3>
              </div>
              <div className="car-descrip">
                <div className="icon">< FaClock/></div>
                <h3>Départ prioritaire</h3>
              </div>
              <button>Réserver cette course</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laysec2;
