import React, { Component } from "react";
import ReservationItem from "../components/ReservationItem";

export default class Reservations extends Component {
  state = {
    showReservations: [],
    allReservations: [
      { id: "1", numOfSeats: "5", customerName: "User1", location: "A" },
      { id: "2", numOfSeats: "2", customerName: "User2", location: "B" },
      { id: "3", numOfSeats: "1", customerName: "User3", location: "A" },
      { id: "4", numOfSeats: "3", customerName: "User4", location: "B" }
    ]
  };
  componentDidMount() {
    //get reservations for logged in user and set the state.
    //check props type to see what kind of reservations to show and then use showReservations to display
  }
  render() {
    return (
      <div>
        {this.state.allReservations.map(item => {
          return <ReservationItem key={item.id} />;
        })}
      </div>
    );
  }
}
