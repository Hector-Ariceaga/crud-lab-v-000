import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
    restaurantId: this.props.restaurant.id
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' onChange={this.handleOnChange} value={this.state.text}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
