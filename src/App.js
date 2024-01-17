import "./App.css";
import ContentOne from "./components/ContentOne";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Image1 from './images/Image1.png'
import Image2 from './images/Image2.png'
import Image3 from './images/Image3.png'
import Image4 from './images/Image4.png'
import Image5 from './images/Image5.png'
import ContentTwo from "./components/ContentTwo";
import Next from "./images/Next.png";
import Previous from "./images/previous.png";
import ContentThree from "./components/ContentThree";
import Newsletter from "./components/Newsletter";
import ContentFour from './components/ContentFour'
import Footer from "./components/Footer";

function App() {
  const [colourClass, setColour] = useState("orange-background");
  const [slideNo, setSlideNo] = useState("01");
  const [paraText, setPara] = useState("Product Design");
  const [heaDing, setHeading] = useState(
    "Finding Your T-Shape As A Specilist Designer"
  );
  const[images, setImages] = useState(Image1)

  const slideOne = () => {
    setColour("orange-background");
    setSlideNo("01");
    setPara("Product Design");
    setHeading("Finding Your T-Shape As A Specilist Designer");
    setImages(Image1)
  };
  const slideTwo = () => {
    setColour("pink-background");
    setPara("Behing The Scenes");
    setHeading("Collaboration Sectets: Design X Engineeering");
    setSlideNo("02");
    setImages(Image2)
  };
  const slideThree = () => {
    setColour("blue-background");
    setPara("Methods");
    setHeading("Navigating the Discovery Phase");
    setSlideNo("03");
    setImages(Image3)
  };
  const slideFour = () => {
    setColour("orange-background");
    setPara("Product Design");
    setHeading(`Designing of the world: An Introduction To Localisation`);
    setSlideNo("04");
    setImages(Image4)
  };
  const slideFive = () => {
    setColour("pink-background");
    setPara("Behind The Scenes");
    setHeading("Making Moves: Designing Motion for 2022 Unwrapped");
    setSlideNo("05");
    setImages(Image5)
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (slideNo === "01") {
        slideTwo();
      } else if (slideNo === "02") {
        slideThree();
      } else if (slideNo === "03") {
        slideFour();
      } else if (slideNo === "04") {
        slideFive();
      } else {
        slideOne();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [slideNo]);


  const handleNext=()=>{
    if(slideNo==='01'){
      slideTwo()
    }else if(slideNo==='02'){
      slideThree();
    }else if(slideNo === '03'){
      slideFour();
    }else if(slideNo === '04'){
      slideFive();
    }else{
      slideOne();
    }
  }
  const handlePrev=()=>{
    if(slideNo==='05'){
      slideFour();
    }else if(slideNo==='04'){
      slideThree();
    }else if(slideNo === '03'){
      slideTwo();
    }else if(slideNo === '02'){
      slideOne();
    }else{
      slideFive();
    }
  }

  return (
    <>
      <div className={`app-container1 ${colourClass}`}>
        <Navbar />
        <div className="invisible-clicker">
        <div className="app-buttons">
          <button className="fwd-button" onClick={handleNext}>
            <img src={Next} style={{ width: "20px", height: "20px" }} />
          </button>
          <button className="rwd-button" onClick={handlePrev}>
            <img src={Previous} style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
        </div>
        <ContentOne para={paraText} heading={heaDing} onesource={images} />
      
        <ContentTwo slideno={slideNo} />
      </div>
      <ContentThree/>
      <Newsletter/>
      <ContentFour/>
      <Footer/>
    </>
  );
}

export default App;
