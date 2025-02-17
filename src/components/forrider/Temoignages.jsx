import React from 'react';
import './Temoignages.css';

const Temoignages = () =>{
  return (
    <div className="testimonials-container">
    <div className="main-testimonials">
      <h2>Voici ce que nos passagers ont à dire sur <span className="higlight">Taxi Driver !</span></h2>
      <p>Ne vous fiez pas uniquement à nos paroles, écoutez ce que nos passagers disent de leur expérience avec Taxi Driver.</p>
  
      <div className="testimonials">
        <div className="testimonial">
          <img src="/images/id1.jpg" alt="Sarah J." />
          <h3>Sarah J., Cadre de santé</h3>
          <p>Taxi Driver a transformé mes trajets quotidiens ! L'application est très fluide, et les chauffeurs arrivent toujours rapidement. Je recommande vivement pour tous ceux qui cherchent un transport fiable !</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
        </div>
  
        <div className="testimonial">
          <img src="/images/id2.jpg" alt="John M." />
          <h3>John M., Cadre dirigeant</h3>
          <p>En tant que voyageur régulier, Taxi Driver a été un véritable sauveur. Je peux réserver des courses facilement, et les chauffeurs sont toujours professionnels. Cela a rendu mes déplacements professionnels beaucoup plus pratiques et sans stress.</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
  
        <div className="testimonial">
          <img src="/images/id4.jpg" alt="Emily R." />
          <h3>Emily R., Étudiante</h3>
          <p>Taxi Driver a rendu mes déplacements à l’université beaucoup plus simples. Les courses sont rapides et le service est de qualité. Je n’ai jamais eu de problème avec l’application.</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Temoignages;
