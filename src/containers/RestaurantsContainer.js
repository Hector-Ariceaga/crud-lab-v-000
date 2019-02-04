import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.state.addRestaurant}/>
        <Restaurants restaurants={this.state.restaurants} deleteRestaurant={this.state.deleteRestaurant} />
      </div>
    )
  }
}

const mapStateToProps = {restaurants} => {restaurants}

const mapDispatchToProps = dispatch => {
  addRestaurant: restaurant => {type: 'ADD_RESTAURANT', restaurant}
  deleteRestaurant: restaurantId => {type: 'DELETE_RESTAURANT', restaurantId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
