import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './multicarousel.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

export default function Multicarousel() {
  return (
      <>
    <div className="multi-carousel" >
      <h3>Painting</h3>
      <Carousel  autoPlaySpeed={10000} infinite={true} autoPlay={true} responsive={responsive}>
        <div className="image-slide"><img width="340px" height="220px"src="../images/painting1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/painting3.jpeg"/></div>

      </Carousel>
      
      </div>
      <br></br>

        <br></br>
      <div className="multi-carousel" >
      <h3>Drawing</h3>
      <Carousel  autoPlaySpeed={10000} infinite={true} autoPlay={true} responsive={responsive}>
        <div className="image-slide"><img width="340px" height="220px"src="../images/drawing1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing4.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/drawing4.jpeg"/></div>

      </Carousel>
      
      </div>
      <br></br>
      <br></br>


      <div className="multi-carousel" >
      <h3>Singing</h3>
      <Carousel  autoPlaySpeed={10000} infinite={true} autoPlay={true} responsive={responsive}>
        <div className="image-slide"><img width="340px" height="220px"src="../images/singing1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing4.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing5.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/singing3.jpeg"/></div>

      </Carousel>
      
      </div>
      <br></br>
      <br></br>

      <div className="multi-carousel" >
      <h3>Dance</h3>
      <Carousel  autoPlaySpeed={10000} infinite={true} autoPlay={true} responsive={responsive}>
        <div className="image-slide"><img width="340px" height="220px"src="../images/dance1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance4.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px"src="../images/dance1.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance2.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance3.jpeg"/></div>
        <div className="image-slide"><img width="340px" height="220px" src="../images/dance4.jpeg"/></div>

      </Carousel>
      
      </div>
      

   

      
      </>
  )
}
