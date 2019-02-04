import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === restaurantId)
    const filteredReviews = reviews.map(review => {
      return <Review key={review.id} review={review} restaurant={restaurant} deleteReview={this.props.deleteReview} />
    })
    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;
