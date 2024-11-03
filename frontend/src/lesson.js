import React from 'react';
import Star from './star.js';

const test = [0, 0, 0, 1, 0];

function Lesson({name="name", starPattern}) {
    return (
        <div class="info">
            <div class="lesson">
                <div class="data"> 
                    <h1> {name} </h1>
                </div>
                <div class="constellation">
                    {/* row 1 */}
                    <Star top={"10px"} left={"510px"} />
                    <Star top={"60px"} left={"380px"} />
                    <Star top={"130px"} left={"300px"} /> 
                    <Star top={"200px"} left={"290px"} />
                    <Star top={"270px"} left={"150px"} />
                    <Star top={"300px"} left={"270px"} />
                    <Star top={"360px"} left={"120px"} />
                </div>
                <div class="progress">

                </div>
            </div>
        </div>
    )
}

export default Lesson;