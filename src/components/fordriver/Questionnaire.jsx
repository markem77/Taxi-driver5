import React, { useState } from "react";
import "./questionnaire.css";

const  Questionnaire = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 
  const faqData = [
    {
      question: "Comment créer un compte sur Taxi Driver en tant que passager ?",
      answer:
        "Téléchargez l'application, entrez vos informations personnelles et ajoutez un moyen de paiement pour commencer à commander des courses.",
    },
    {
      question: "Quels sont les critères pour devenir conducteur sur Taxi Driver ?",
      answer:
        "Vous devez avoir un permis valide, un véhicule conforme aux normes, une assurance et un casier judiciaire vierge.",
    },
    {
      question: "Comment commander une course avec l'application Taxi Driver ?",
      answer:
        "Ouvrez l'application, entrez votre destination et sélectionnez votre type de véhicule. Confirmez votre course et un chauffeur vous sera attribué.",
    },
    {
      question: "Que faire si mon chauffeur annule ma course ?",
      answer:
        "Si votre chauffeur annule, un autre vous sera attribué automatiquement. Vous pouvez également relancer une demande de course.",
    },
    {
      question: "Comment puis-je signaler un problème avec une course ?",
      answer:
        "Vous pouvez signaler un incident via l'application dans la section support, que ce soit un problème avec un chauffeur ou une anomalie sur la facturation.",
    },
    {
      question: "Comment sont calculés les tarifs des courses sur Taxi Driver ?",
      answer:
        "Les tarifs sont basés sur la distance, le temps de trajet et la demande en temps réel. Vous verrez une estimation avant de confirmer la course.",
    },
    {
      question: "Quels moyens de paiement sont acceptés sur l'application ?",
      answer:
        "Vous pouvez payer via carte bancaire, portefeuille électronique ou en espèces selon les options disponibles dans votre région.",
    },
    {
      question: "Que faire si j'ai oublié un objet dans un véhicule ?",
      answer:
        "Accédez à l'historique de vos courses et sélectionnez la course concernée pour contacter le chauffeur et récupérer votre objet.",
    },
    {
      question: "Comment puis-je devenir conducteur et recevoir des paiements ?",
      answer:
        "Une fois inscrit et approuvé, vous recevrez vos paiements directement sur votre compte bancaire chaque semaine.",
    },
  ];


  return (
    <div className="faq-container">
      <h2>Foire aux questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className="arrow-question">{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Questionnaire;
