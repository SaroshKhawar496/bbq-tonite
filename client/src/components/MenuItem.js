import React from "react";
import styles from "../sass/MenuItem.module.scss";

const MenuItem = props => {
  return (
    <div className={styles.menuItemBox}>
      <div className={styles.detailsBox}>
        <h2 className={styles.dishTitle}>{props.title}</h2>
        <h4 className={styles.dishPrice}>${props.price}</h4>
      </div>
      <p className={styles.dishDesc}>{props.description}</p>
    </div>
  );
};

export default MenuItem;
