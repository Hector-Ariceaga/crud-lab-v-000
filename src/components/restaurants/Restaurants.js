import React, { Component } from 'react';

class Restaurants extends Component {
  this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={restaurant.props.deleteRestaurant}/>)

  render() {
    return(
      <ul>
        {this.props.restaurants}
      </ul>
    );
  }
};

export default Restaurants;
