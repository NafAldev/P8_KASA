import React from 'react';
import { useParams } from 'react-router-dom';
import dataLodging from '../data/logements.json';
import Error404 from './Error404';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Rating from '../components/Rating';
import "../style/Lodging.scss";


function Lodging() {
  const { id } = useParams();
  const selectedLogement = dataLodging.find((logement) => logement.id === id);

  if (!selectedLogement) {
    return <Error404 />;
  }

  return (
    <section>
      <Carousel logement={selectedLogement} />
      <div className='lodgingDetails_container'>
        <div className='info_container'>
            <h2 className="lodging_title primary_txt">{selectedLogement.title}</h2>

            <div>
              <p className="lodging_location primary_txt"> {selectedLogement.location}</p>
            </div>

            <div className="tag_container">
              {selectedLogement.tags.map((tag) => (
                <span className="tag_name"key={tag}>{tag} </span>
              ))}
            </div>
        </div>
        <div className='profilRating_container'>
            <div className='profile_container' >
              <p className="profile_name primary_txt"> {selectedLogement.host.name}</p>
              <img className='profile_pic' src={selectedLogement.host.picture} alt={`${selectedLogement.host.name}`} />
            </div>

            <div>
              <Rating rating={selectedLogement.rating} />
            </div>
        </div>
      </div>
      <div className='lodging_collapse'>
        <Collapse title="Description">
            <p>{selectedLogement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <div className="details_equipements">
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
