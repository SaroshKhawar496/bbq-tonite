import styles from "../sass/CustomerDashboard.module.scss";
import React, { Component } from "react";
import Reservations from "../containers/Reservations";
import { FaEdit, FaEye, FaJenkins } from "react-icons/fa";

class CustomerDashboard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.buttonDiv}>
          <FaEdit className={styles.dashIcon} />
          <h2 className="text-capitalize">new reservation</h2>
        </div>
        <div className={styles.buttonDiv}>
          <FaEye className={styles.dashIcon} />
          <h2 className="text-capitalize">upcoming reservations</h2>
        </div>
        <div className={styles.buttonDiv}>
          <FaJenkins className={styles.dashIcon} />
          <h2 className="text-capitalize">You</h2>
        </div>
      </div>
    );
  }
}

export default CustomerDashboard;
