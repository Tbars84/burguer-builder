import * as actionTypes from "./actionTypes";
import axInstance from '../../shared/axiosInstances/Axios';

export const add_Ingredient = (name) => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	}
}
export const remove_Ingredient = (name) => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	}
}

	export const setIngredients = (ings) => {
		return {
			type: actionTypes.SET_INGREDIENTS,
			ingredients: ings
		}
	}

	export const fetchIngredientsFailed = () => {
		return {
			type: actionTypes.FETCH_INGREDIENTS_FAILED,
		}
	}

export const initIngredients = () => {
	return dispatch => {
		axInstance.get('ingredients.json')
		.then(resp => {
			dispatch(setIngredients(resp.data))
		})
		.catch(err =>{ 
			dispatch(fetchIngredientsFailed())
		})
	}
}
