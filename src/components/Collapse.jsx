import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "../style/Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

 return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
          />
        </span>
      </div>
      <div className={`collapse_content ${isOpen ? 'show' : 'hidden'}`}>
        {children}
      </div>
    </div>
 );
};

export default Collapse;
