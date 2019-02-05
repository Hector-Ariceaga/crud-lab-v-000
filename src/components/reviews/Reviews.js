import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  restaurantReviews() {
    this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
  }
  
  render() {
    const 

    const filteredReviews = restaurantReviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
    })

    return (
      <ul>
        {filteredReviews}
      </ul>
    );
  }
};

export default Reviews;
