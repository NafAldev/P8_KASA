import React, { useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../style/Collapse.scss";

function Collapse  ({ title, children }) {
  // gestion de l'etat du collapse ( ouvert/fermer)
  const [isOpen, setIsOpen] = useState(false);

  // Maj de l'état ( fermer => ouvert )
  const toggleCollapse = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  
  
  return (
    <div className={`collapse ${isOpen ? 'open' : 'closed'}`}>
      <div className={`collapse_header ${isOpen ? 'open' : 'closed'}`} onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? 'open' : 'closed'}`}>
          <FontAwesomeIcon
            className="arrow"
            icon={faChevronUp}
          />
        </span>
      </div>
      <div className={`collapse_content ${isOpen ? 'show' : 'hidden'}`}>
        {isOpen && children}
      </div>
    </div>
  );
}  

export default Collapse;
