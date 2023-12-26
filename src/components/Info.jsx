import React from 'react'
import Tag from './Tag';
import dataLodging from '../data/logements.json';
import { useParams } from 'react-router-dom';
import "../style/Info.scss";


function Info() {
    const { id } = useParams();

    const selectedLogement = dataLodging.find((logement) => logement.id === id);
  
    
  return (
    <div className='info'>
            <h2 className="info_title primary_txt">{selectedLogement.title}</h2>
            <p className="info_location primary_txt"> {selectedLogement.location}</p>

            <Tag />
        </div>
  )
}

export default Info;
