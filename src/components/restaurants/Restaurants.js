import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

 restaurants = () =>

  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
