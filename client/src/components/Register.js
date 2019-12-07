import React, { Component, state } from "react";
import { Button, Form, Alert, Col} from 'react-bootstrap';
import axios from 'axios';

class Signup extends Component{
  constructor(){
    super()
    this.state = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": ""
    };
    this.trackChange = this.trackChange.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  trackChange = (event) => {
    event.preventDefault();
    console.log("event " + event.target.value)
    const { target: { name, value } } = event;
    this.setState({[String(name)]: String(value)})
  }

  createUser = () => {
    console.log(this.state.firstName)
    console.log("email" + this.state.email)

    axios({
      method: 'post',
      url: `http://localhost:4000/api/users/`,
      headers: {},
      data: {
          "id":"cha",
          "firstName": "cha",
          "lastName": "cha",
          "email": "cha@hotmail.com",
          "status": "cool",
          "password": "cha"
      }
    })
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  render(){
    return (
    <Form>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control id="email" type="email" onChange = {this.trackChange.bind(this)} placeholder="Enter email" name="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" type="password" onChange = {this.trackChange.bind(this)} placeholder="Password" name="password"/>
      </Form.Group>
      <Form>
      <Form.Row>
        <Col>
          <Form.Control id="firstName" onChange = {this.trackChange.bind(this)} placeholder="First name" name="firstName"/>
        </Col>
        <Col>
          <Form.Control id="lastName" onChange = {this.trackChange.bind(this)} placeholder="Last name" name="lastName"/>
        </Col>
      </Form.Row>
    </Form>
      <Button variant="primary" type="submit" onClick={this.createUser.bind(this)}>
        Submit
      </Button>
    </Form>
    );
  }
}

export default Signup
