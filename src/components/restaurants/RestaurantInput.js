import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Restaurant Name</label>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
