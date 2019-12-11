import React from "react";

const ReservationItem = props => {
  return (
    <div>
      <p>ReservationItem</p>
      <p>Id: {props.res.id}</p>
      <p>seats: {props.res.numOfSeats}</p>
      <p>location: {props.res.location}</p>
    </div>
  );
};

export default ReservationItem;
