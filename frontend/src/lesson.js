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
                    <h2> Read Text: Lorem ipsum odor amet, consectetuer adipiscing elit. Primis himenaeos ullamcorper ornare ultricies efficitur mollis fames. Ac nunc in ridiculus potenti urna eu. Lacinia turpis lacus eleifend ornare scelerisque. Ligula elementum semper suscipit cras commodo purus erat. Finibus iaculis tellus cursus finibus sapien dolor dignissim. Praesent malesuada gravida leo montes feugiat nam amet mollis. Amet nec nisl molestie augue senectus faucibus. Semper etiam torquent laoreet risus sodales etiam volutpat porttitor.</h2>
                    <h3> Question below:  Lorem ipsum odor amet, consectetuer adipiscing elit. Primis himenaeos ullamcorper ornare ultricies efficitur mollis fames.?</h3>
                </section>
                <div class="progress">
                    <textarea id="constText" name = "constText"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Lesson;