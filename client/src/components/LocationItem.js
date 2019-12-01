import React from "react";
import styles from "../sass/LocationItem.module.scss";
import { FaMap, FaPhoneSquare } from "react-icons/fa";

const LocationItem = ({
  unit,
  street,
  city,
  province,
  postalCode,
  hours,
  phone
}) => {
  console.log(hours);
  return (
    <div className={styles.locationItemBox}>
      <div className={styles.addressBox}>
        <div className={styles.addressTextBox}>
          <FaMap className={styles.icon} />
          <span className={styles.addressText}>
            {street} Unit {unit}, {city}, {province} {postalCode}{" "}
          </span>
        </div>
        <div className={styles.addressTextBox}>
          <FaPhoneSquare className={styles.icon} />
          <span className={styles.addressText}>+1-{phone}</span>
        </div>
      </div>
      <div className={styles.timingsBox}>
        <h3>Hours</h3>
        {hours.map(item => (
          <div className={styles.timings}>
            <span className={styles.day}>{item.day}</span> : {item.hours}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
