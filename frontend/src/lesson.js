import React from 'react';
import Star from './star.js';

const test = [0, 0, 0, 1, 0];

function Lesson() {
    return (
        <div class="inf">
            <div class="lesson">
                <div class="data"> 
                    <h1> NAME </h1>
                </div>
                <div class="constellation">
                    {/* row 1 */}
                    <Star top={"1vh"} left={"40vw"} />
                    <Star top={"8vh"} left={"31vw"} />
                    <Star top={"19vh"} left={"26vw"} /> 
                    <Star top={"29vh"} left={"22vw"} />
                    <Star top={"39vh"} left={"12vw"} />
                    <Star top={"47vh"} left={"20vw"} />
                    <Star top={"55vh"} left={"8vw"} />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Lesson;