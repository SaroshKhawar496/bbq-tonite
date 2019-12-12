import React, { Component } from "react";
import ReservationItem from "../components/ReservationItem";
import axios from "axios";

export default class Reservations extends Component {
  state = {
    showReservations: [],
    allReservations: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "/api/users/reservations/view",
      headers: {
        authorization: localStorage.getItem("authorization")
      }
    }).then(res => {
      // console.log(res.data);
      this.setState(
        {
          allReservations: res.data,
          showReservations: []
        },
        () => {
          this.setState(prevState => ({
            ...prevState,
            showReservations: this.state.allReservations.filter(
              item => item.status === this.props.type
            )
          }));
        }
      );
    });
    //get reservations for logged in user and set the state.
    //check props type to see what kind of reservations to show and then use showReservations to display
  }
  render() {
    // console.log(this.state);

    return (
      <div>
        {this.state.showReservations.map(item => {
          // console.log(item.locationId);
          return <ReservationItem key={item._id} res={item} />;
        })}
      </div>
    );
  }
}
