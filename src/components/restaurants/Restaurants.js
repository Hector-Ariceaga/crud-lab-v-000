import React, { Component } from 'react';

class Restaurants extends Component {
  let restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)

  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
