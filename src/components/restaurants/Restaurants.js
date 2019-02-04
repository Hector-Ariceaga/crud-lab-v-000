import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    return(
      {console.log(this.props)}
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)}
      </ul>
    );
  }
};

export default Restaurants;
