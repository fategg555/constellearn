import React, { useRef } from 'react';
import Thumbnail from './thumbnail';
import up from './images/up.png';
import down from './images/dowen.png';

function InfiniteScrollComponent({ onEnterLesson }) {
    const infRef = useRef(null);

    const handlePrevClick = () => {
        if (infRef.current) {
            infRef.current.prepend(infRef.current.querySelector('.thumbnail:last-child'));
        }
    };

    const handleNextClick = () => {
        if (infRef.current) {
            infRef.current.append(infRef.current.querySelector('.thumbnail:first-child'));
        }
    };

    return (
        <div>
            <div className="inf" ref={infRef} onClick={onEnterLesson} >
                <Thumbnail name="URSA MINOR" />
                <Thumbnail name="BIG DIPPER" />
                <Thumbnail name="SCORPIUS" />
            </div>
            <div className="buttons">
                <div className="prev" onClick={handlePrevClick}>
                    <img src={up} alt="up" />
                </div>
                <div className="next" onClick={handleNextClick}>
                    <img src={down} alt="down" />
                </div>
            </div>
        </div>
    );
}

export default InfiniteScrollComponent;
