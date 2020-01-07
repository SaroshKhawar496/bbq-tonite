import React, { Component } from "react";
import axios from "axios";
import styles from "../sass/GoogleReviews.module.scss";
import { Card, CardDeck } from "react-bootstrap";

class GoogleReviews extends Component {
  state = {
    reviews: []
  };
  componentDidMount() {
    axios
      .get("/api/restaurant/reviews")
      .then(res => {
        // console.log(res.data.reviews);
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
    // console.log(this.state.reviews);
    return (
      <div>
        <h1 className={styles.heading}>Reviews</h1>
        <CardDeck className="d-flex">
          {this.state.reviews.map(review => {
            if (review.rating >= 4) {
              // This return block is a good candidate to break out into another component
              return (
                <Card bg="dark" text="white" key={review.time}>
                  <Card.Header className={styles.cardHeader}>
                    <h3 className={styles.cardHeaderText}>
                      {review.author_name}
                    </h3>
                  </Card.Header>
                  <Card.Body className={styles.cardBody}>
                    <Card.Text className="py-0 text-dark">
                      {review.text}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    <small>
                      <span> Posted: </span>
                      <span className="text-capitalize">
                        {review.relative_time_description}
                      </span>
                    </small>
                  </Card.Footer>
                </Card>
              );
            } else {
              return null;
            }
          })}
        </CardDeck>
      </div>
    );
  }
}

export default GoogleReviews;
