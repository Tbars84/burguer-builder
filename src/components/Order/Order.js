import React from 'react'
import classes from "./Order.css";
const Order = (props) => {
	const ingredients = []
	for (const ingName in props.ingredients) {
		ingredients.push({
			name: ingName,
			amount: props.ingredients[ingName]
		})
	}
	let ingredientsOutput = ingredients.map(ing => {
		return <span>{`${ing.name} (${ing.amount}) `}</span>
	})
	return (
		<div className={classes.Order}>
			<p>Ingredients: {ingredientsOutput}</p>
			<p>Price: <strong>{props.price}</strong></p>
		</div>
	)
}


export default Order
