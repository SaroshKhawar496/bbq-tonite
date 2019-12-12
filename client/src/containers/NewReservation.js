import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { createClient } from "contentful";
// import { DateTime } from "react-datetime-bootstrap";
// import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";
import moment from "moment";
import TimePicker from "react-time-picker";
import axios from "axios";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

var client = createClient({
  space: "16wwcbfuof0f",
  accessToken: "Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"
});

export default class NewReservation extends Component {
  state = {
    locations: [],
    numOfSeats: null,
    locationId: null,
    time: "",
    date: new Date(),
    error: "",
    alert: null
  };
  componentDidMount() {
    console.log("State", this.state);
    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "restaurantLocation"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          locations: items
        }));
      });
  }
  handleChange = e => {
    console.log(e.target.id);
    console.log(e.target.value);
    // value = e.target.value;
    // console.log(a);
    this.setState({
      [e.target.id]: e.target.value
    });
    // this.setState(prevState => ({
    //   ...prevState,
    //   [e.target.id]: e.target.value
    // }));
    // console.log(key, value);
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let dateAndTime = this.state.date + " " + this.state.time;
    console.log(dateAndTime);
    axios({
      method: "post",
      url: "/api/users/reservation/create",
      data: {
        seatsReqd: this.state.numOfSeats,

        bookingDateAndTime: dateAndTime,
        locationId: this.state.locationId
      },
      headers: {
        authorization: localStorage.getItem("authorization")
      }
    })
      .then(res => {
        console.log(res.data);
        if (res.status === 201) {
          this.setState({
            locations: [],
            numOfSeats: "",
            locationId: null,
            time: "",
            date: new Date(),
            alert: "success",
            error: null
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          locations: [],
          numOfSeats: "",
          locationId: null,
          time: "",
          date: new Date(),
          alert: "failed",
          error: err.response.data.error
        });
      });
    // axios
    //   .post(
    //     "/reservation/create",
    //     {
    //       seatsReqd: this.state.numOfSeats,

    //       bookingDateAndTime: dateAndTime,
    //       locationId: this.state.locationId
    //     },
    //     {
    //       authorization: localStorage.getItem("authorization")
    //     }
    //   )
    //   .then(res => {
    //     console.log("Res after post: ", res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  handleTime = time => {
    this.setState(prevState => ({
      ...prevState,
      time: time
    }));
  };
  handleDate = date => {
    console.log("handle date called");
    this.setState(prevState => ({
      ...prevState,
      date: moment(date).format("DD-MM-YYYY")
    }));
  };

  render() {
    console.log(this.state);
    let alert = null;
    if (this.state.alert === "success") {
      alert = (
        <Alert className="text-capitalize" variant="success">
          Reservation created! <Link to="/customerdash">Go To Dashboard</Link>
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
      <section className="container my-5">
        {alert}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="numOfSeats">Seats Required</label>
            <select
              className="form-control"
              id="numOfSeats"
              onChange={this.handleChange}
              value={this.state.numOfSeats}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="locationId">Location</label>
            <select
              className="form-control"
              id="locationId"
              onChange={this.handleChange}
            >
              <option disabled selected>
                {" "}
                -- select a location --{" "}
              </option>

              {this.state.locations.map(item => {
                return (
                  <option
                    key={item.fields.locationId}
                    value={
                      item.fields.unit +
                      "-" +
                      item.fields.street +
                      "-" +
                      item.fields.city
                    }
                  >
                    {item.fields.unit}-{item.fields.street}, {item.fields.city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Reservation Date</label>
            <br />
            {/* from react-date-picker */}
            {/* <DatePicker
              onChange={this.handleDate}
              value={this.state.date}
              required={true}
              minDate={new Date()}
              monthPlaceholder="mm"
              dayPlaceholder="dd"
              yearPlaceholder="yyyy"
            /> */}
            <DatePicker
              // selected={this.state.date}
              minDate={new Date()}
              value={this.state.date}
              onChange={this.handleDate}
              name="date"
              dateFormat="MM-DD-YYYY"
            />
          </div>
          <div className="form-group">
            <label>Reservation Time</label>
            <br />
            <TimePicker
              onChange={this.handleTime}
              value={this.state.time}
              disableClock={true}
              minTime="13:00"
              maxTime="22:00"
              maxDetail="minute"
              required={true}
              hourPlaceholder="hh"
              minutePlaceholder="mm"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
}
