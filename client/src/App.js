import './App.css';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import React, { useState } from 'react';
import CarouselComponent from "./components/carousel.component";
import Multicarousel from './components/multicarousel';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (<>
 
    <Navbar/>
    <CarouselComponent />
    <Multicarousel/>
     
    </>
  );
}

export default App;
