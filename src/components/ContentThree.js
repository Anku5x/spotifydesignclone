import React from "react";
import Image2 from '../images/Image2.png'
import Image5 from '../images/Image5.png'
import Image6 from '../images/Image6.png'
import Image7 from '../images/Image7.png'
export default function ContentThree() {
  return (
    <>
      <div className="contentthree-containerone">
        <div className="contentthree-containertwo">
          <h2>New Releases</h2>
          <p className='cursor-pointer underline-animation'>View All Stories →</p>
        </div>
        <div className="contentthree-containerthree">
            <div>
            <img src={Image2} style={{width:'300px', height: '300px'}} alt="content 3 1"/>
            <p ><strong><span className='contentthree-paratext'>Behind The Scenes</span></strong></p>
            <h2>Collaboration Secrets: Design X Engineering</h2>
            <p>Learn how engineers design and collaborate at Spotify: What works well, what can go wrong...and everything in between.</p>
            </div>
            <div>
            <img src={Image6} style={{width:'300px', height: '175px'}} alt="content 3 2"/>
            <p ><strong><span className='contentthree-paratext'>Q+A</span></strong></p>
            <h2>Ask Spotify Design 07</h2>
            <p>How do you choose colors? Prioritize your workload? Govern a design system? Our community panel returns to answer your thoughtful questions.</p>
            </div>
            <div>
            <img src={Image5} style={{width:'300px', height: '175px'}} alt="content 3 3"/>
            <p ><strong><span className='contentthree-paratext'>Behind The Scenes</span></strong></p>
            <h2>Making Moves: Designing Motion for 2022 Unwrapped</h2>
            <p>Simple brief, complex executions: UX Motion Designer Ade shares his journey on bringing 2022 Wrapped's data stories to life.</p>
            </div>
            <div>
            <img src={Image7} style={{width:'300px', height: '300px'}} alt="content 3 4"/>
            <p ><strong><span className='contentthree-paratext'>Listen</span></strong><strong><span className='contentthree-paragreen'>Dance</span><strong><span className='contentthree-paragreen'>Ambient</span></strong></strong></p>
            <p ></p>
            <p ></p>
            <p ><strong><span className='contentthree-paraelec'>Electronic</span></strong></p>
            <h2>Zoned 44</h2>
            <p>Journey up and through the cosmic soundscape to join ShroomCat for a misty mountaintop stomp</p>
            </div>
        </div>
      </div>
    </>
  );
}
