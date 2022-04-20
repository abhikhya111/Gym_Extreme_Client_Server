import "./style.css"
import React from 'react'
  
const ImageSlider = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 1000,
   
  };
  return (
    <>
    <div className="tag">
          <h1>Image Gallery</h1>
    </div>
      <div className="imgslider">
        
      </div>
          </>
  )
}
export default ImageSlider;