import React from "react";
import ContentFour1 from '../images/ContentFour1.png'
import ContentFour2 from '../images/ContentFour2.png'
export default function ContentThree() {
  return (
    <>
      <div className="contentthree-containerone">
        <div className="contentthree-containertwo">
          <h2>Tools</h2>
          <p className='cursor-pointer underline-animation'>View Team →</p>
        </div>
        <div className="contentthree-containerthree">
            <div>
         <img src={ContentFour1} alt='content-four-1'/>
         <p ><strong><span className='contentthree-paratext'>Tools</span></strong></p>
         <h2>Performance Cards: Designing</h2>
         <h2>with Meaning and Empathy</h2>
         <p>Challenge the way you think and serve access-constrained</p>
         <p>users with these cards</p>
            </div>
            <div>
            <img src={ContentFour2} alt='content-four-2'/>
        <p ><strong><span className='contentthree-paratext'>Tools</span></strong></p>
        <h2>Assessing Constrains: </h2>
        <h2>Making products for all users</h2>
            </div>
            <div>
          <h2>Jobs</h2>
          <h2>Open Roles at Spotify Design</h2>
          <h4>MIAMI</h4>
          <h4>Design Manager - Editorial, LatAm </h4>
            </div>
            <div>
          
            </div>
        </div>
      </div>
    </>
  );
}