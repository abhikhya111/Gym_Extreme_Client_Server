import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';
 
export default function CarouselComponent() {
    return (
        <>
 <button className="buttonLogin">Login</button>
     <button className="buttonRegister">Register</button>
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows dynamicHeight showIndicators >
                <div>
                    <img  src="../images/img1.jpeg" />
                </div>
                <div>
                    <img  src="../images/img4.jpeg" />
                </div>
                <div>
                    <img src="../images/img3.jpeg" />
                </div>
            </Carousel>
        </div>
        {/* <div className="intro">
        <h4 className="we-do">WHAT WE DO?</h4>
        <h5 className="we-do-content">We Embrace Diversity and Deliver Customer Success. We use ServiceNow to unite IT
         operations, security management, risk management, and to deliver resilient services which are based on 
         customer-centered priorities.We help the customers realize the true potential of their product and provide
        them effective engineering solutions at each stage of the product development life cycle.We help organizations 
        in integrating new emerging technologies like RPA and DevOps into their ecosystem with an optimized cost.</h5>
        
        </div> */}
        </>
    );
}