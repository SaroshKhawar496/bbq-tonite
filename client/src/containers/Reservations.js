import React, { Component } from "react";
import Reservation from "../components/Reservation";

export default class Reservations extends Component {
  state = {
    reservations: [
      { id: "1", numOfSeats: "5", customerName: "User1", location: "A" },
      { id: "2", numOfSeats: "2", customerName: "User2", location: "B" },
      { id: "3", numOfSeats: "1", customerName: "User3", location: "A" },
      { id: "4", numOfSeats: "3", customerName: "User4", location: "B" }
    ]
  };
  componentDidMount() {
    //get reservations for logged in user and set the state.
  }
  render() {
    return (
      <div>
        {this.state.reservations.map(item => {
          return <Reservation key={item.id} />;
        })}
      </div>
    );
  }
}
