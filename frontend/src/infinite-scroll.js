import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Thumbnail from './thumbnail';
import up from './images/up.png';
import down from './images/dowen.png';

function infiniteScroll() {
    let inf = document.querySelector('.inf');
    let nextBtn = document.querySelector("next");

    return (
        <>
            <div class="inf">
                <Thumbnail name={"URSA MINOR"} />
                <Thumbnail name={"BIG DIPPER"}/>
                <Thumbnail name={"SCORPIUS"}/>
            </div>
            <div class="buttons">
                <div class="prev" onClick={inf.prepend(document.querySelector('Thumbnail:last-child'))}>
                    <img src={up} alt="up" />
                </div>
                <div class="next" onClick={inf.append(document.querySelector('Thumbnail:first-child'))}>
                    <img src={down} alt="down" />
                </div>
            </div>
        </>
    )
}
  
export default infiniteScroll;
  