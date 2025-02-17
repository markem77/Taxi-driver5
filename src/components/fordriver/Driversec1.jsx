import React from 'react'
import "./driversec1.css"
import { FaUserPlus, FaCheckCircle, FaCar } from "react-icons/fa";


function Driversec1() {
  return (
    <section className="how-to-register">
    <h2>Devenez Conducteur en 3 Étapes</h2>
    <p className="description">
      Inscrivez-vous dès aujourd’hui et commencez à conduire avec Taxi Driver. 
      Suivez ces trois étapes simples pour rejoindre notre équipe !
    </p>
    <div className="steps-container">
      
      {/* Étape 1 */}
      <div className="step">
        <div className="icon-container gray-bg">
          <FaUserPlus className="icon" />
        </div>
        <h3>1. Créez votre compte</h3>
        <p>
          Remplissez le formulaire d'inscription avec vos informations personnelles 
          et téléchargez les documents requis (permis de conduire, pièce d'identité, etc.).
        </p>
      </div>

      <div className="dashed-line"></div>

      {/* Étape 2 */}
      <div className="step">
        <div className="icon-container gray-bg">
          <FaCheckCircle className="icon" />
        </div>
        <h3>2. Vérification et validation</h3>
        <p>
          Nos équipes examinent vos documents et valident votre compte. 
          Vous recevrez une confirmation une fois votre dossier approuvé.
        </p>
      </div>

      <div className="dashed-line"></div>

      {/* Étape 3 */}
      <div className="step">
        <div className="icon-container gray-bg">
          <FaCar className="icon" />
        </div>
        <h3>3. Commencez à conduire</h3>
        <p>
          Une fois validé, connectez-vous à votre application, acceptez des courses et commencez 
          à gagner de l'argent en conduisant vos passagers en toute sécurité.
        </p>
      </div>

    </div>
  </section>
  )
}

export default Driversec1