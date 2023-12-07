import React from 'react';
import "../style/Card.scss";

const Card = ({ logement }) => {
  // Vérifie si logement est défini avant de tenter la déstructuration
  if (!logement) {
    return <div>Erreur : Données manquantes</div>;
  }

  const { title, cover } = logement;

  return (
    <figure className='card'>
      <img className='card_cover' src={cover} alt={`Couverture de ${title}`} />
      <div className='card_gradient'>
      <figcaption className='card_title'>{title}</figcaption>
      </div>
    </figure>
  );
};

export default Card;