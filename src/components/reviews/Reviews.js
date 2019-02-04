import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  if(this.props.reviews) {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === restaurantId)

    const filteredReviews = restaurantReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })
  }


  render() {
    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;
