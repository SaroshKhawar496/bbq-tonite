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
    locationID: "",
    time: "11:59",
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
  handleChange = e => {};
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
    console.log(this.state.time, this.state.date);
    return (
      <section className="container my-5">
        <form>
          <div className="form-group">
            <label htmlFor="numOfSeats">Seats Required</label>
            <select className="form-control" id="numOfSeats">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <select className="form-control" id="numOfSeats">
              <option disabled selected value>
                {" "}
                -- select a location --{" "}
              </option>

              {this.state.locations.map(item => {
                return (
                  <option key={item.fields.locationID}>
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
              minTime="11:59"
              maxTime="21:00"
              maxDetail="minute"
              required={true}
              hourPlaceholder="hh"
              minutePlaceholder="mm"
            />
          </div>
        </form>
      </section>
    );
  }
}
