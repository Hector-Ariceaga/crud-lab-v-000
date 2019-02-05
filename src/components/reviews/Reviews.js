import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    if 
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const filteredReviews = restaurantReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })

    const noReviews = <li>No Reviews</li>

    return (
      <ul>
        {filteredReviews ? filteredReviews : noReviews}
      </ul>
    );
  }
};

export default Reviews;
