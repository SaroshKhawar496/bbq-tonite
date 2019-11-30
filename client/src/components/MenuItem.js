import React from "react";

const MenuItem = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
      <h4>${props.price}</h4>
    </div>
  );
};

export default MenuItem;
