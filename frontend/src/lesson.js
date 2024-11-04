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
                <section class="infoBox">
                    <h2> Ursa Minor (Latin for 'Lesser Bear', contrasting with Ursa Major), also known as the Little Bear, is a constellation located in the far northern sky. As with the Great Bear, the tail of the Little Bear may also be seen as the handle of a ladle, hence the North American name, Little Dipper: seven stars with four in its bowl like its partner the Big Dipper. Ursa Minor was one of the 48 constellations listed by the 2nd-century astronomer Ptolemy, and remains one of the 88 modern constellations. Ursa Minor has traditionally been important for navigation, particularly by mariners, because of Polaris being the north pole star. </h2>
                    <h3> Why has Ursa Minor been important for navigation? </h3>
                </section>
                <div class="progress">
                    <textarea id="constText" name = "constText"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Lesson;