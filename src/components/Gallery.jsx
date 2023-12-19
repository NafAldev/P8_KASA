import Card from './Card.jsx';
import "../style/Gallery.scss"; 
import logements from "../data/logements.json";



function Gallery() {
  return (
    <div className='gallery'>
      {logements.map((logement, index) => (
        <Card key={logement.id} logement={logement} />
      ))}
  </div>
    
  )
}

export default Gallery
