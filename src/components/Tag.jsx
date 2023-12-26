import React from 'react'
import dataLodging from '../data/logements.json';
import { useParams } from 'react-router-dom';
import "../style/Tag.scss";

function Tag() {
    const { id } = useParams();

    const selectedLogement = dataLodging.find((logement) => logement.id === id);
    
  return (
      <div className="tag">
        {selectedLogement.tags.map((tag) => (
          <span className="tag_name"key={tag}>{tag} </span>
        ))}
      </div>

  )
}

export default Tag;
