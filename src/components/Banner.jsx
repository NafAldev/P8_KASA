import React from 'react';
import "../style/Banner.scss";


const Banner = ({ image, text }) => {
    return (
	    <div className="banner">
            <img className="banner_img" src={image} alt="Bannière" />
			<h1 className="banner_txt">{text}</h1>
		</div>
    )

}

export default Banner;