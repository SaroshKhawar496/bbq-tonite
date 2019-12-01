import React, { Component } from "react";
import axios from "axios";
import styles from "../sass/GoogleReviews.module.scss";

class GoogleReviews extends Component {
  state = {
    reviews: []
  };
  componentDidMount() {
    axios
      .get("/api/restaurant/reviews")
      .then(res => {
        console.log(res.data.reviews);
        let reviews = res.data.reviews;
        this.setState({
          reviews: reviews
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1 className={styles.heading}>Reviews</h1>
        <div>
          {this.state.reviews.map(review => {
            if (review.rating >= 4) {
              return (
                <div>
                  <p>{review.author_name}</p>
                  <p>{review.text}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default GoogleReviews;
