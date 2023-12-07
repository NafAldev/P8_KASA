import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Bannerpic from '../images/bannière-homepage.svg';


const Home = () => {
  const bannerData = {
    image: Bannerpic,
    text: 'Chez vous, partout et ailleurs',
  }
  return (
    <div>
        <Banner {...bannerData}/>
        <Gallery/>
    </div>
  )
}

export default Home;
