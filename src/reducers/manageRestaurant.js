import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {id: cuid(), text: action.text}
      return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}

    case 'ADD_REVIEW':
      const review = {id: cuid(), restaurantId: action.review.id, text: action.review.text}
      return {...state, reviews: [...state.reviews, review]}


    default:
      return state;
  }
}
