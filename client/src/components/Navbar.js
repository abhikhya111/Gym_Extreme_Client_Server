import React from 'react';
import Box from '@mui/material/Box';
import './Navbar.css';


const mystyle = {
  color: "white",
  backgroundColor: "#001b73",
  padding: "10px",
  fontFamily: "Arial",
  backgroundImage: "linear-gradient(to bottom,#1a73e1,#055abf 100%)",
  height: "78px",
  
}; 

const Navbar= () =>{
  return (<>


    
   <div style={mystyle} >
     <h1>REACT IMAGE GALLERY</h1>
    

    </div>
    <br></br>
  

  </>
  );
}
export default Navbar;