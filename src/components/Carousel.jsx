import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../style/Carousel.scss";

function Carousel ({ logement }) {
  // Initialisation de l'index de l'image 
  const [currentPicture, setCurrentPicture] = useState(0);

  const picturesLength = logement.pictures.length;

  // passage à la diapositive suivante
  const nextSlide = () => {
    setCurrentPicture((prevPicture) => (prevPicture + 1) % picturesLength);
  };

  // passage à la diapositive précedente  
  const prevSlide = () => {
    setCurrentPicture((prevPicture) => (prevPicture - 1 + picturesLength) % picturesLength);
  };

  // Affichage des éléments de navigation du carousel si true
  const showCarouselElements = picturesLength > 1;

  return (
    <div className="carousel">
      
      {showCarouselElements && (
        <button className="carousel_arrow_button left" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}

      <div className="carousel_slide">
        <img src={logement.pictures[currentPicture]} alt={`Logement ${currentPicture + 1}`} />
        {showCarouselElements && (
          <p className="carousel_numerotation">{`${currentPicture + 1} / ${picturesLength}`}</p>
        )}
      </div>

      {showCarouselElements && (
        <button className="carousel_arrow_button right" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </div>
  );
}

export default Carousel;
