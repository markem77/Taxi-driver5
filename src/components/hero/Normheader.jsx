
import "./styles/normheader.css"
import { useState } from 'react';



function Normheader (){

  const [activeLink, setActiveLink] = useState('home'); // 'home' actif par défaut

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const links = [
    { href: '#Populaires', label: 'Populaires' },
    { href: '#Choix', label: 'Choix de la rédaction' },
    { href: '#Pour_vous', label: 'Pour vous' },
    { href: '#Suivie', label: 'Suivie' },
  ];

  return (
    <div className="Normheader_cont">
      <h1>Idée de la communauté</h1>
      <div className="Normlink">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={activeLink === link.label.toLowerCase() ? 'active' : ''}
            onClick={() => handleClick(link.label.toLowerCase())}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Normheader
