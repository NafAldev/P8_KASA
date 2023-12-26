import React from 'react';
import Banner from '../../src/components/Banner';
import BannerAboutPic from '../images/banniere-About.jpg';
import Collapse from '../components/Collapse';
import aboutData from "../data/collapseDatas.json";

const About = () => {
  const bannerProps = {
    image: BannerAboutPic,
    text:'', 
  };

  return (
    <div>
      <Banner {...bannerProps} />

      {aboutData.map((item, index) => (
        <Collapse key={index} title={item.aboutTitle}>
          <p className='paddingContent'>{item.aboutTxt}</p>
        </Collapse>
      ))}
    </div>
  );
}

export default About;