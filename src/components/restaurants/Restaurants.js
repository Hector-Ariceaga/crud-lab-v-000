import React, { Component } from 'react';

class Restaurants extends Component {

  const restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} {...restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)

  render() {
    return(
      <ul>
        {this.props.restaurants}
      </ul>
    );
  }
};

export default Restaurants;
