import React, { Component } from "react";
import styles from "../sass/Home.module.scss";
import GoogleReviews from "../containers/GoogleReviews";
import AboutUs from "../components/About";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className={styles.mainSection}>
          <div className={styles.heroText}>
            <h2 className={styles.mainTitle}>Tandoori Grill</h2>
            <h3>Flavor Worth Having</h3>
          </div>
        </section>
        <section className={styles.container}>
          <AboutUs />
          <GoogleReviews />
        </section>
      </div>
    );
  }
}
