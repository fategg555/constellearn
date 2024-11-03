import React from 'react';
import star from './images/star.png';

function Star({top, left, complete="inset 0px 0px 10px 24px var(--dark-bg)", big="white" }) {
    return (
        <img src={star} alt="star" style={{ top: `${top}`, borderRadius: "50px", left: `${left}`, backgroundColor: `${big}`, position: "relative", boxShadow: `${complete}`}} />
    )
}

export default Star;