import Card from './Card.jsx';
import "../style/Gallery.scss"; 
import logements from "../data/logements.json";



function Gallery() {
  return (
    <div className='gallery'>
       {/* Mapping à travers les logements et afficher grâce à Card */}
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
  </div>
    
  )
}

export default Gallery
