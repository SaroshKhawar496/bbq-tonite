import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { createClient } from "contentful";
// import { DateTime } from "react-datetime-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
// import TimePicker from 'rc-time-picker';

var client = createClient({
  space: "16wwcbfuof0f",
  accessToken: "Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"
});

export default class NewReservation extends Component {
  state = {
    locations: [],
    numOfSeats: "",
    locationId: "",
    time: "",
    date: ""
  };
  componentDidMount() {
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
  };
  handleTime = time => {
    this.setState(prevState => ({
      ...prevState,
      time: time
    }));
  };
  handleDate = date => {
    this.setState(prevState => ({
      ...prevState,
      date: date
    }));
  };

  render() {
    console.log(this.state);
    return (
      <section className="container my-5">
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
                    value={item.fields.locationId}
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
            <DatePicker
              onChange={this.handleDate}
              value={this.state.date}
              required={true}
              minDate={new Date()}
              monthPlaceholder="mm"
              dayPlaceholder="dd"
              yearPlaceholder="yyyy"
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
