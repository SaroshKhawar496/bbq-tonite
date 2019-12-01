import React from "react";
import styles from "../sass/LocationItem.module.scss";

const LocationItem = ({ unit, street, city, province, postalCode, hours }) => {
  console.log(hours);
  return (
    <div className={styles.menuItemBox}>
      <div className={styles.addressBox}>
        <span className={styles.addressText}>
          {street} Unit {unit}, {city}, {province} {postalCode}
        </span>
      </div>
      <div className={styles.timingsBox}>
        {hours.map(item => (
          <p>
            {item.day} : {item.hours}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
