import React from "react";
import "./laysec1.css";

const servicesData = [
  {
    icon: "🚗",
    title: "Transport Rapide",
    description: "Des chauffeurs professionnels pour vous emmener à destination en un rien de temps.",
  },
  {
    icon: "💰",
    title: "Prix Abordable",
    description: "Des tarifs compétitifs pour un transport économique et confortable.",
  },
  {
    icon: "🔒",
    title: "Sécurité Maximale",
    description: "Voyagez en toute tranquillité avec nos mesures de sécurité avancées.",
  },
];

const Laysec1 = () => {
  return (
    <section className="services">
      <h2 className="section-title">Des Solutions Sur Mesure et un Soutien Inégalé</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card-laysec1" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Laysec1;
