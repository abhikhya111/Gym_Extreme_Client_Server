import React, { useState } from 'react'
import TopNavbar from './TopNavbar';
import './CreateTags.css';
import Button from '@mui/material/Button';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import Sidebar from "./Sidebar";

class CreateTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: ''};
    this.state = {value2: ''};
    this.state = {value3: ''};
    this.state = {value4: ''};
    this.state = {value5: ''};


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  handleChange3(event) {
    this.setState({value3: event.target.value});
  }

  handleChange4(event) {
    this.setState({value4: event.target.value});
  }

  handleChange5(event) {
    this.setState({value5: event.target.value});
  }

  imageUpload(){
    console.log('aaaaaaaaaaaaaaa');
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value2 + this.state.value1);
    axios.post(`http://localhost:4000/api/users`)  
      .then(res => {  
        console.log('hi');
        console.log(res);  
        console.log(res.data);  
     
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });  
    event.preventDefault();
  }


  render() {
    return (
      <>
      <TopNavbar/>
      <Sidebar/>
      <div className = "form-box">
      <form className="create-tag" action="http://localhost:4000/api/users" method="POST">
      <h1>Create New Tag</h1>
          <input type="text" value={this.state.value1} name="name" onChange={this.handleChange1} placeholder="Enter tag name" />
          <input type="text" value={this.state.value2}  name="title" onChange={this.handleChange2} placeholder="Enter tag title" />
          <input type="text" value={this.state.value3} name="metaTitle" onChange={this.handleChange3} placeholder="Enter tag metaTitle" />
          <input type="text" value={this.state.value4} name="description" onChange={this.handleChange4} placeholder="Enter description" />
          <input type="text" value={this.state.value5} name="metaDescription" onChange={this.handleChange5} placeholder="Enter Meta Description" />
          <div className="editor">
          <Editor 
  
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            
          />
          </div>
         
        <Button type="submit" onClick={this.handleDownload} variant="contained" color="success">Submit</Button>
      </form>
      </div>
      </>
    );
  }
}

export default CreateTags;


