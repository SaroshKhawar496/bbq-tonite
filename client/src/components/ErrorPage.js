import React from "react";
import styles from "../sass/ErrorPage.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id={styles.notfound}>
      <div class={styles.notfound}>
        <div class={styles.notfound404}>
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link to="/">Go TO Homepage</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
