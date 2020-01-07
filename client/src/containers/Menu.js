import React, { Component } from "react";
import { createClient } from "contentful";
import MenuItem from "../components/MenuItem";
import styles from "../sass/Menu.module.scss";

// This is duplicated in a few places (Location.js, Menu.js, NewReservation.js)
// We should probably abstract it into some kind of constants module, or helper function that each file could import if needs be
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
    // This function is fairly repetative, and has some inefficiencies (so many setStates)
    // We could optimize by using Promise.All:
    
    const curriesProm = client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqCurries"
      })
      

    const dessertsProm = client
      .getEntries({
        //not using the following option will get all entries from the space
        content_type: "bbqDesserts"
      })
      
      // example:
      Promise.all([curriesProm, dessertsProm]).then(([curries, desserts]) => {
        this.setState(prevState => ({
          ...prevState,
          curries: curries,
          desserts: desserts
        }));
        // etc. with the remaining calls below
      })

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
    // console.log(this.state);
    // This is a bit old-school, we should (and probably should) instantiate each variable with a const and only when it is defined
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
        <section className={styles.mainSection}>
          <div className={styles.heroText}>
            <h2 className={styles.mainTitle}>Excite Your Senses</h2>
          </div>
        </section>
        <section className={styles.menuBg}>
          <div className="container menuContainer">
            <h2 className={styles.menuCategory}>Starters</h2>
            {starters}
            <h2 className={styles.menuCategory}>Grill</h2>
            {grill}
            <h2 className={styles.menuCategory}>Rice</h2>
            {rice}
            <h2 className={styles.menuCategory}>Curries</h2>
            {curries}
            <h2 className={styles.menuCategory}>Drinks</h2>
            {drinks}
            <h2 className={styles.menuCategory}>Desserts</h2>
            {desserts}
          </div>
        </section>
      </div>
    );
  }
}
