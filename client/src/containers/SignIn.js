import React, { Component } from "react";
import { Button, Form, Alert, Col } from "react-bootstrap";
import axios from "axios";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post("/api/users/login", this.state, { headers: headers })
      .then(response => {
        console.log(response.data);
        localStorage.setItem("Authorization", response.data);
      })
      .catch(err => {
        console.log("request has error");
        console.log(err);
      });
  };
  render() {
    return (
      <section className="container my-3 ">
        <h2>Sign In </h2>
        <Form className="my-4" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    );
  }
}

export default SignIn;
