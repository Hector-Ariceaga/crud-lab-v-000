import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          
          <input type="text" onChange={this.handleOnChange}
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
