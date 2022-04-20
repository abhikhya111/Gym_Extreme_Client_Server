import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseball, faBoxArchive, faChess, faCrown, faGamepad, faIdCard, faPersonRunning, faPlay, faPuzzlePiece, faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';



import './HomeNavbar.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const mystyle = {
  color: "white",
  backgroundColor: "#001b73",
  padding: "10px",
  fontFamily: "Arial",
  backgroundImage: "linear-gradient(to bottom,#1a73e1,#055abf 100%)",
  height: "88px",
  display:"flex",
  flexWrap: "wrap",
  marginLeft:"40px",
  marginRight:"40px",
  borderRadius: "7px"
}; 

class navbar extends React.Component {
    state = {
        persons: []
      }
       rows = [];

      componentDidMount() {
      axios.get(`http://localhost:4000/api/users`)
      .then(res => {
            const persons = res.data;
            this.setState({ persons });
            console.log(persons)
      })
      }
    render(){

        return (<>



            <Box style={mystyle} >
               <div class="flex-box">
               <p>{this.state.persons.length}</p>

               {this.state.persons
                        .map(person => {
                    return (<>
                        <div className='tag1 tag'>

                    <center><FontAwesomeIcon className="actionIcon" icon={faPersonRunning}/>{person.title}</center>

                    </div>
                                        
                                        </>
                    )})}

                    </div>
               {/* <div className='tag2 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faCrown}/>ADVENTURE</center>
         
               </div>
         
               <div className='tag3 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faGamepad}/>ARCADE</center>
         
               </div>
         
               <div className='tag4 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faChess}/>BOARD</center>
         
               </div>
         
               <div className='tag5 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faIdCard}/>CARD</center>
         
               </div>
         
               <div className='tag6 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faBoxArchive}/>FIGHTING</center>
         
               </div>
         
               <div className='tag7 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faGamepad}/>IO GAMES</center>
         
               </div>
         
               <div className='tag8 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faPlay}/>MULTIPLAYER</center>
               <br></br><br></br>
               </div>
               <div className='tag9 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faPuzzlePiece}/>PUZZLE</center>
         
               </div>
         
               <div className='tag10 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faPersonRunning}/>RACING</center>
         
               </div>
         
               <div className='tag11 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faPlay}/>ROLE-PLAYING GAMES</center>
         
               </div>
         
               <div className='tag12 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faShare}/>SHOOTING</center>
         
               </div>
         
               <div className='tag13 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faBaseball}/>SPORTS</center>
         
               </div>
         
               <div className='tag14 tag'>
               <center><FontAwesomeIcon className="actionIcon" icon={faStar}/>STRATEGY</center>
         
               </div> */}
         
             </Box>
         
       
           
         
           </>
           );
    }
  
}
export default navbar;