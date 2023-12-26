import React from 'react';
import dataLodging from '../data/logements.json';
import { useParams } from 'react-router-dom';
import "../style/DescriptionLodging.scss";
import Rating from './Rating';
import Info from './Info';
import Profil from './Profil';

function DescriptionLodging() {
  // Récuperation de l'id de l'url
  const { id } = useParams();

  // Correspondance du logement avec l'id identique
  const selectedLogement = dataLodging.find((logement) => logement.id === id);
  
  return (
    <div className='lodging'>
        <Info />
        <div className='lodging_profil'>
            <Profil />
            <Rating rating={selectedLogement.rating} />
        </div>
      </div>
  );
}



export default DescriptionLodging;
