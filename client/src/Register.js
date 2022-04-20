import React , { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => console.log(data))
   }  


export default function Login({ setToken }) {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    // if((email==='abhikhya@gmail.com') && (password==='123' )){
    //     setToken(token);

    // }
  }

  return(
    <div className="login-wrapper">
        <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text onChange={e => setUserName(e.target.value)} className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>

  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }