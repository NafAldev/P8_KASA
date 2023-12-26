import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "../style/Rating.scss";

function StarRating({ rating }) {
  const renderStars = () => {
    // Tableau pour stocker les étoiles
    const stars = [];

    // Nombre d'étoiles pleines
    const fullStars = Math.floor(rating);


    // Boucle pour generer les étoiles 
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Ajouter une étoile 
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
      } else {
        // Ajouter une étoile vide pour compléter jusqu'à 5 étoiles
        stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="empty_star" />);
      }
    }

    return stars;
  };

  return <div className="star_rating">{renderStars()}</div>;
}

export default StarRating;
