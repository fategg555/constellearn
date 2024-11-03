import React from 'react';
import star from './images/star.png';

function Star({dis}) {
    return (
        <img src={star} alt="star" style={{ opacity: `${dis}`, backgroundColor: "transparent", marginLeft: "5vw" }} />
    )
}

export default Star;