import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "../style/Carousel.scss";
function Slideshow({ logement }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const picturesLength = logement.pictures.length;


  const nextSlide = () => {
    setCurrentPicture((prevPicture) => (prevPicture + 1) % picturesLength);
  };

  const prevSlide = () => {
    setCurrentPicture((prevPicture) => (prevPicture - 1 + picturesLength) % picturesLength);
  };

  return (
    <div className="carousel">
      <button className="carousel_arrow_button left" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="carousel_slide">
        <img src={logement.pictures[currentPicture]} alt={`Logement ${currentPicture + 1}`} />
      </div>
      <button className="carousel_arrow_button right" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Slideshow;
