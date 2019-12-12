import React from "react";

const ReservationItem = props => {
  // console.log(props);
  return (
    <div id={props.res._id} className="card mb-2 pl-2">
      <div className="card-body">
        {/* <h3 className="card-title">Reservation</h3> */}
        <p className="card-text text-capitalize ">
          <span className="font-weight-bold">seats:</span> {props.res.seatsReqd}
        </p>
        <p className="card-text text-capitalize">
          <span className="font-weight-bold">location:</span>{" "}
          {props.res.locationId}
        </p>
        <p className="card-text text-capitalize">
          <span className="font-weight-bold">Date & Time:</span>{" "}
          {props.res.bookingDateAndTime}
        </p>
      </div>
    </div>
  );
};

export default ReservationItem;
