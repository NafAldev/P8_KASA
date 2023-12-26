import React from 'react'
import dataLodging from '../data/logements.json';
import { useParams } from 'react-router-dom';
import "../style/Profil.scss";

function Profil() {
    const { id } = useParams();

    const selectedLogement = dataLodging.find((logement) => logement.id === id);

  return (
    <div className='profil' >
        <p className="profil_name primary_txt"> {selectedLogement.host.name}</p>
        <img className='profil_pic' src={selectedLogement.host.picture} alt={`${selectedLogement.host.name}`} />
    </div>
  )
}

export default Profil;
