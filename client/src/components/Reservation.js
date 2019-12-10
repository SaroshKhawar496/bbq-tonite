import React from "react";
import styles from "../sass/Reservation.module.scss";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Reservation = () => {
  return (
    <div>
      <section className={styles.mainSection}>
        <div className={styles.heroText}>
          <h2 className={styles.mainTitle}>Book Your Reservation</h2>
        </div>
      </section>
      <section className={styles.container}>
        <h3 className='text-center pb-2 orange-text font-weight-bold'>Find A Table</h3>
        <div className={styles.btnDiv}>
          <Link to="/signin">
            <Button variant="secondary">Sign In</Button>
          </Link>
          <Link to="/signup" className="ml-3">
            <Button variant="secondary">Sign Up</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Reservation;
