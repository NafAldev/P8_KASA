import React from 'react';
import "../style/Card.scss";
import { Link } from 'react-router-dom';

const Card = ({ logement }) => {
  const { id,title, cover } = logement;
  return (
    <Link to ={`/lodging/${id}`} >
    <figure className='card'>
      <img className='card_cover' src={cover} alt={`Couverture de ${title}`} />
      <div className='card_gradient'>
      <figcaption className='card_title'>{title}</figcaption>
      </div>
    </figure>
    </Link>
  );
};

export default Card;