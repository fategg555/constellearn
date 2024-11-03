import React from 'react';

function Thumbnail({name="PLACEHOLDER", rating="AWAITING RATING", img}) {
    return (
        <div class="thumbnail">
            <div class="name roboto-light">
                <h2> {name} </h2>
            </div>
            <div class="name roboto-light">
                <h2> {rating} </h2>
            </div>
        </div>
    )
}

export default Thumbnail;