import React from 'react';
import Banner from '../../src/components/Banner';
import BannerAboutPic from '../images/bannière-About.svg';
import Collapse from '../components/Collapse';
import aboutData from "../data/collapseDatas.json";

const About = () => {
  const bannerDatas = {
    image: BannerAboutPic,
    text:'', 
  };

  return (
    <div>
      <Banner {...bannerDatas} />

      {aboutData.map((item, index) => (
        <Collapse key={index} title={item.aboutTitle}>
          <p>{item.aboutTxt}</p>
        </Collapse>
      ))}
    </div>
  );
}

export default About;