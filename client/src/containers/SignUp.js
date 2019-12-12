import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    alert: null,
    error: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      passwordConfirmation: this.state.passwordConfirmation
    };

    axios({
      method: "post",
      url: "/api/users",
      data: userData
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            alert: "success",
            error: null
          });
        }
        // console.log(res.status);
      })
      .catch(err => {
        // console.log(err.response);
        // console.log(err.response.status);
        // console.log(err.response.data.error);

        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          alert: "failed",
          error: err.response.data.error
        });
      });
  };
  render() {
    let alert = null;
    if (this.state.alert === "success") {
      alert = (
        <Alert className="text-capitalize" variant="success">
          sign up successful. please <Link to="/signin">Login</Link> to
          continue.
        </Alert>
      );
    } else if (this.state.alert === "failed") {
      alert = (
        <Alert className="text-capitalize" variant="danger">
          {this.state.error}
        </Alert>
      );
    }
    return (
      <section className="container my-3 ">
        <h2>Sign Up </h2>
        {alert}
        <Form className="my-4" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstName"
              onChange={this.handleChange}
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastName"
              onChange={this.handleChange}
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
            />
          </Form.Group>

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
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              id="passwordConfirmation"
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              onChange={this.handleChange}
              value={this.state.passwordConfirmation}
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

export default Signup;
