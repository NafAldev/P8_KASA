import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import "../style/Rating.scss";

function StarRating({ rating }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key={fullStars} icon={faStarHalf} />);
    }

    // Ajouter des étoiles vides pour compléter jusqu'à 5 étoiles
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="empty-star" />);
    }

    return stars;
  };

  return <div className="star_rating">{renderStars()}</div>;
}

export default StarRating;
