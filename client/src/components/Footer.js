import React from "react";
import styles from "../sass/Footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.footerIconsBox}>
          <a
            href="https://www.facebook.com/Bar-B-Q-Tonite-Restaurant-127740740599984/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.footerIcon} />
          </a>
          <a
            href="https://www.instagram.com/explore/locations/304456163343909/bar-b-q-tonite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.footerIcon} />
          </a>
        </div>
        <div >
          <p className={styles.footerText}>
            <span className={styles.copyright}>&copy;</span> Copyright
            {" " + new Date().getFullYear()}
            <br />
            Created By: <span className={styles.creators}> Sarosh & Imran</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
