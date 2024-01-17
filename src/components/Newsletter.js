import React from 'react'
export default function Newsletter(){
    return(
        <>
        <div className='newsletter-out'>
        <div className='newsletter-one'>
            <br></br>
            <h1 className='newsletter-heading'>Want Spotify Design updates</h1>
            <h1>sent straight to your inbox?</h1>
        </div>
        <div className='newsletter-two'>
            <input className='newsletter-textbox' value='We saved a spot for your email'></input><button className='newsletter-button'>Send</button>
            <br></br>
            
            </div>
            <div className='newsletter-para'>
            <p >By clicking send you'll receive occasional emails from Spotify Design.</p>
            <p >You always have the choice to unsubscribe within every email you receive.</p>
            </div>
            </div>
        </>
    );
}