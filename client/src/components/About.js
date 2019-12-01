import React from "react";
import styles from '../sass/About.module.scss'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        As passionate food admirers, we believe that there are no shortcuts to
        great food. That is why our food is carefully marinated and prepared to
        ensure perfection. Whether it’s the sizzling kababs off the charcoal
        grill or pan frying the flavourful karahi recipe, each item is made to
        order. We take great pride in knowing only the highest quality of food is
        being served to our customers.
      </p>
    </div>
  );
};

export default About;
