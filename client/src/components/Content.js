import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import TopNavbar from './TopNavbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Sidebar from "./Sidebar";

class Content extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
  axios.get(`http://localhost:4000/api/users`)
  .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons)
  })
  }

  deleteRow(id, e){  
    axios.delete(`http://localhost:4000/api/users/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
     
      })  
      window.location.reload(false);
  }  
  render(){
    
    return(
<>     

<TopNavbar/>
<Sidebar/>
    <div style={{ height:600, width: 1000 ,marginLeft:420,marginTop:50}}>
    <Button variant="contained" color="primary"><Link  to="/createTags">Create New Tag</Link></Button>
        <br></br>
        <br></br>
        <br></br>
        <h2>ALL TAGS</h2>
        <br></br>
        <br></br>

    <Stack spacing={2} direction="row">

      <Button variant="contained" color="success">Copy</Button>
      <Button variant="contained" color="success">CSV</Button>
      <Button variant="contained" color="success">Excel</Button>
      <Button variant="contained" color="success">PDF</Button>
      <Button variant="contained" color="success">Print</Button>

    </Stack>
    <br></br>        <br></br>

    <table className="table table-bordered">
  <thead className="tagTable">
      <th>Tag Name</th>
      <th>Title</th>
      <th>Meta Title</th>
      <th>Description</th>
      <th>Meta Description</th>
  </thead>
  <tbody>
    {this.state.persons
            .map(person => {
        return (
            <tr key={person.tagId}>
                <td>{person.name}</td>
                <td>{person.title}</td>
                <td>{person.metaTitle}</td>
                <td>{person.description}</td>
                <td>{person.metaDescription}</td>
                <td><Button variant="contained" color="primary" className="btn btn-danger" onClick={(e) => this.deleteRow(person._id, e)} >Delete</Button></td>
            </tr>
        )
    })}
</tbody>
</table>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </div>
        </>
    )
  }
    
  
}
 
export default Content