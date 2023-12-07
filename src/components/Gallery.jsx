import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import "../style/Gallery.scss"; 
const Gallery = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        setLogements(await response.json());
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='gallery'>
      {logements.map((logement, index) => (
        <Card key={index} logement={logement} />
      ))}
    </div>
  );
};

export default Gallery;
