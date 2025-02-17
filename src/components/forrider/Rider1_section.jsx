import React from 'react'
import "./rider1_section.css"

function Rider1_section() {
  return (
    <div class="rider1-container">
    <div class="rider1-content">
    <div className="text-section">
    <h3>NOS TAXIS</h3>
    <h1>CHOISISSEZ TAXI DRIVER</h1>
    <p>
        Optez pour des déplacements sûrs, confortables et rapides avec nos taxis. 
        Que ce soit pour un trajet quotidien, une course urgente ou une soirée en ville, 
        nos chauffeurs professionnels sont à votre service.
    </p>
    <ul className="steps">
        <li><span>1</span>Choisissez votre destination</li>
        <li><span>2</span>Réservez en quelques clics</li>
        <li><span>3</span>Profitez d'un trajet agréable</li>
    </ul>
    <button className="advert-button">RÉSERVER MAINTENANT</button>
</div>
      <div class="image-section">
        <img src="./images/rider1sec.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Rider1_section

