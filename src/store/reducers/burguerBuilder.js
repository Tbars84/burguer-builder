import * as actionTypes from "../actions/actionTypes";

const initialState = {
	ingredients: null,
	totalPrice: 0.75,
	errorIng: false
}

const ING_PRICES = {
	salad: 0.4,
	bacon: 1.2,
	cheese: 1,
	meat: 1.5
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
				},
				totalPrice: state.totalPrice + ING_PRICES[action.ingredientName]
			}
		case actionTypes.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				totalPrice: state.totalPrice - ING_PRICES[action.ingredientName]
			}
		case actionTypes.SET_INGREDIENTS:
			return {
				...state,
				ingredients: action.ingredients,
				totalPrice: 0.75,
				errorIng: false
			}
		case actionTypes.FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				errorIng: true
			}
		default:
			return state;
	}
}

export default reducer;