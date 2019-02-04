import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {

  const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant} />)

  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
