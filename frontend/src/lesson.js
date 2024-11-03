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
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={1} />
                    <Star dis={0} />
                    {/* row 2 */}
                    <Star dis={0} />
                    <Star dis={1} />
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={1} />
                    {/* row 3 */}
                    <Star dis={1} />
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={0} />
                    {/* row 4 */}
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={1} />
                    <Star dis={0} />
                    <Star dis={0} />
                    {/* row 5 */}
                    <Star dis={0} />
                    <Star dis={1} />
                    <Star dis={0} />
                    <Star dis={0} />
                    <Star dis={0} />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Lesson;