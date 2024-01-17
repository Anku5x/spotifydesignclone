import React from 'react'
export default function ContentTwo (props) {
    return(
        <>
        <div className='content-two-container'>
            <div className='content-two-slideno'>
            <p>{props.slideno}</p> 
            <div className='loading-bar'>
                <div className='loading-two'> 
                    <div className='loading-three'></div>
                </div>
            </div>
            <p>05</p>
           
            </div>
            <div>
                <h3>Scroll Down ⬇</h3>
            </div>

        </div>
        </>
    )
}