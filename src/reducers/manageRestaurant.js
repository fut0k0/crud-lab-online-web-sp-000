import cuid from "cuid"

function manageRestaurant(state={restaurants: [], reviews: []}, action) {
	switch (action.type) {

		case "ADD_RESTAURANT":
			const restaurant = {
				id: cuid(),
				text: action.text
			};
			return {...state, restaurants: [...state.restaurants, restaurant]};

		case "DELETE_RESTAURANT":
			return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews.filter(review => review.restaurantId !== action.id)}

		case "ADD_REVIEW":
			const review = {
				id: cuid(),
				text: action.review.text,
				restaurantId: action.review.restaurantId
			};
			return {...state, reviews: [...state.reviews, review]};

		case "DELETE_REVIEW":
			return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

		default:
			return state
	}
}

export default manageRestaurant
