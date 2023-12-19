import React from 'react';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import Bannerpic from '../images/bannière-homepage.svg';


function Home () {
  const bannerProps = {
    image: Bannerpic,
    text: 'Chez vous, partout et ailleurs',
  }
  return (
    <div>
        <Banner {...bannerProps}/>
        <Gallery/>
    </div>
  )
}

export default Home;
