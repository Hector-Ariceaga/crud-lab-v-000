import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
  if(!this.props.reviews.empty?) {
    const restaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const filteredReviews = restaurantReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })
  } else {
    return filteredReviews = <li>No reviews</li>
  }
    

    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;
