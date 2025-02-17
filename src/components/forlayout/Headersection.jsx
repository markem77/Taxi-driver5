import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from './images/animationheader.json';
import animationData1 from './images/animation1.json';
import animationData2 from './images/animation2.json';


import './headersection.css'

function Headersection() {
    
  return (
    <div className="header-section-cont">
        <div className="headercontent">
            <p>Voyagez sans tracas, avec une expérience simple, rapide et agréable à chaque étape.</p>
            <h1>Un transport rapide, fiable et abordable à portée de main.</h1>
            <div className="socialnetwork">
            <Lottie 
             animationData={animationData1} 
             loop 
              autoplay 
              style={{ width: '100px', height:'100px' }} 
           />
            <Lottie 
              animationData={animationData2} 
              loop 
              autoplay 
              style={{ width: '100px', height: '100px' }} 
            />
            </div>
            <button>
                Réserver maintenant
            </button>
        </div> 
        <div className="lottie-cont">
        <Lottie 
        animationData={animationData} 
        loop 
        autoplay 
        style={{ width: '400px', height: '400px' }} 
      />
        </div>
    </div>
  )
}
export default Headersection