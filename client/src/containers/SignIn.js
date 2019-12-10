import React, { Component } from "react";
import { Button, Form, Alert, Col } from "react-bootstrap";
import axios from "axios";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    alert: null,
    error: null
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleLoginSuccess = () => {
    this.props.history.push("/customerdash");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const headers = {
      "Content-Type": "application/json"
    };
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios({
      method: "post",
      url: "/api/users/login",
      data: userData
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          this.setState(
            {
              email: "",
              password: "",
              alert: "success",
              error: null
            },
            () => {
              localStorage.setItem("Authorization", res.data);
              this.handleLoginSuccess();
            }
          );
        }
      })
      .catch(err => {
        this.setState({
          email: "",
          password: "",
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
          sign in successful.
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
        <h2>Sign In </h2>
        {alert}
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
