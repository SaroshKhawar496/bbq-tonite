import React, { Component } from "react";
import { createClient } from "contentful";
import MenuItem from "../components/MenuItem";

var client = createClient({
  space: "16wwcbfuof0f",
  accessToken: "Qrmlmhfud4wVp78tbQIhulCBklkpgKvwoXBbHXaByyM"
});

export default class Menu extends Component {
  state = {
    curries: [],
    desserts: [],
    drinks: [],
    grillItems: [],
    rice: [],
    starters: []
  };

  componentDidMount() {
    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqCurries"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          curries: items
        }));
      });

    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqDesserts"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          desserts: items
        }));
      });

    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqDrinks"
      })
      .then(({ items }) => {
        console.log("grabbing drinks", { items });
        this.setState(prevState => ({
          ...prevState,
          drinks: items
        }));
      });

    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqGrill"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          grillItems: items
        }));
      });

    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqRice"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          rice: items
        }));
      });

    client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqStarter"
      })
      .then(({ items }) => {
        this.setState(prevState => ({
          ...prevState,
          starters: items
        }));
      });
  }
  render() {
    console.log(this.state);
    let drinks, curries, starters, desserts, grill, rice;

    drinks = this.state.drinks.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));

    curries = this.state.curries.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));

    desserts = this.state.desserts.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));

    grill = this.state.grillItems.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));
    rice = this.state.rice.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));

    starters = this.state.starters.map(item => (
      <MenuItem
        key={item.sys.id}
        title={item.fields.title}
        description={item.fields.description}
        price={item.fields.price}
      />
    ));

    return (
      <div>
        <h1>Menu</h1>
        <h2>Starters</h2>
        {starters}
        <h2>Grill</h2>
        {grill}
        <h2>Rice</h2>
        {rice}
        <h2>Curries</h2>
        {curries}
        <h2>Drinks</h2>
        {drinks}
        <h2>Desserts</h2>
        {desserts}
      </div>
    );
  }
}
