import React from 'react';
import { useParams } from 'react-router-dom';
import dataLodging from '../data/logements.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Error404  from "./Error404"
import DescriptionLodging from '../components/DescriptionLodging';


function Lodging() {
  const { id } = useParams();
  const selectedLogement = dataLodging.find((logement) => logement.id === id);

  // affichage de la page d'erreur en cas d'id érroné
  if (!selectedLogement) {
        return(
          <Error404/>
        )
  }

  return (
    <section>
      <Carousel logement={selectedLogement} />
      <DescriptionLodging />
      <div className='collapse_lodging'>
        <Collapse title="Description">
            <p className='paddingContent'>{selectedLogement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <div className="collapse_detailsEquipements paddingContent ">
            {selectedLogement.equipments.map((equipment, index) => (
              <span key={index}>{equipment}</span>
            ))}
          </div>
        </Collapse>
      </div>
    </section>
  );
}

export default Lodging;
