import React from "react";


export default function ContentOne(props) {

  return (
    <>
      <div className="content-container-one">

        <div className="content-one-text">
          <p className="content-one-para">{props.para}</p>
          <h1 className="heading">{props.heading}</h1>
        </div>
        <div className="image-background">
          <img
            className="content-one-image"
            src={props.onesource}
            alt="Spotify logo images"
          ></img>
        </div>
      </div>
    </>
  );
}
