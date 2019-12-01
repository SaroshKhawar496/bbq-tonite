import React, { Component } from "react";
import { createClient } from "contentful";
import LocationItem from "../components/LocationItem";

var client = createClient({
  space: "16wwcbfuof0f",
  accessToken: "Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"
});

export default class Location extends Component {
  state = {
    locations: []
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
  render() {
    console.log(this.state.locations);
    const locations = this.state.locations.map(item => (
      <LocationItem
        key={item.sys.id}
        unit={item.fields.unit}
        street={item.fields.street}
        city={item.fields.city}
        province={item.fields.povince}
        postalCode={item.fields.postalCode}
        hours={item.fields.hours}
      />
    ));
    return (
      <div>
        <h1>Location</h1>
        {locations}
      </div>
    );
  }
}
