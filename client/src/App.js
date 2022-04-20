import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

import images from "./images";
import ImageSlider from "./ImageSlider";
import CarouselComponent from "./components/carousel.component";
import Multicarousel from './components/multicarousel';
import { Nav } from 'react-bootstrap';

function App() {
  return (<>
 
    <Navbar/>
    <CarouselComponent />
    <Multicarousel/>
     
    </>
  );
}

export default App;
