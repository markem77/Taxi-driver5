import React from 'react'
import "./footer.css"
import taxi_logo from "../forlayout/images/taxi_logo.png"; 
import myIcon from "../../assets/images/icon1.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaApple } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io';


function Footer() {
  const customStyle = {
    fontFamily: 'Arial, sans-serif',  // Remplace la police par défaut
  };

  return (
    <div className="footer-cont">
        <div className='footer-section1'>
          <div className="logo-container" >
            <img src={taxi_logo} alt="taxi-logo" />
          </div>
          <h3>Accédez au centre d'aide</h3>
            <div className='footer-element'>
              <div className="footer-list" style={customStyle}>
                <p className='titre-element'>Entreprise</p>
                <p>A propos</p>
                <p>Nos services</p>
                <p>Espace presse</p>
                <p>investisseurs</p>
                <p>Blog</p>
              </div>

              <div className="footer-list">
                <p className='titre-element'>Produits</p>
                <p>A propos</p>
                <p>Nos services</p>
                <p>Espace presse</p>
                <p>investisseurs</p>
                <p>Blog</p>
              </div>

              <div className="footer-list">
                <p className='titre-element'>Entreprise</p>
                <p>A propos</p>
                <p>Nos services</p>
                <p>Espace presse</p>
                <p>investisseurs</p>
                <p>Blog</p>
            </div>
            <div className="footer-list">
                <p className='titre-element'>Entreprise</p>
                <p>A propos</p>
                <p>Nos services</p>
                <p>Espace presse</p>
                <p>investisseurs</p>
                <p>Blog</p>
            </div>
          </div>
           
           
        </div>
        <div className='footer-section2'>
        <div className="icon-footer">
          <FaFacebook className="footer-icon" />
          <FaXTwitter className="footer-icon" />
          <IoLogoYoutube className="footer-icon" />
          <FaLinkedin className="footer-icon" />
          <FaInstagramSquare  className="footer-icon" />
       </div>
       <div className='footer-element2'>
          <div className="element2-container">
          <IoGlobeOutline className="element2-icon"/> <p>Français(france)</p>
        </div>
        <div className="element2-container">
          <FaLocationDot className="element2-icon"/> <p>Abidjan</p>
        </div>
       
       </div>
        </div>
        <div className="footer-section3">
          <div className="footer-butt">
          <div className="foot_button">
            <FaApple className='icon_button'/>
            <div className="footbutt_title">
             <p>Télécharger dans</p>
            <p>L'app Store</p>
        </div>
      </div>
      <div className="foot_button">
          <img src={myIcon} alt="Mon icône" style={{ width: 25, height: 25 }} />
          <div className="footbutt_title">
            <p>DISPONIBLE SUR</p>
            <p>Google Play</p>
          </div>
          </div>
        </div>
        <div className='foot-ending'>
            <div className='footend1'>
              <p>© 2025 Taxi driver Technologies Inc.</p>
              </div>
            <div className="footend2">
              <a href="#"> Confidentialité</a>
              <a href="#"> Accessibilité</a>
              <a href="#"> Conditions</a>
            </div>
          </div>
    </div>
  </div>
  )
}


export default Footer