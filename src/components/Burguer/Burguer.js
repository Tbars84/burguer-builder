import React from 'react'
import classes from "./Burguer.css";
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';
const Burguer = (props) => {
	// Object.keys es una forma de crear un array a partir de 
	// un objeto
	const formatedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			// La clase reservada Array nos permite generar un Array
			// con el valor que le pasemos dentro de los parentesis	
			return [...Array(props.ingredients[igKey])]
				.map((_, i)=>{
					return <BurguerIngredient key={igKey+i} type={igKey} />
				})
		})
		.reduce((arr , el) =>{
			return arr.concat(el)
		}, [])
	return (
		<div className={classes.Burguer}>
			<BurguerIngredient type='bread-top' />
			{formatedIngredients.length === 0 ? 
				'Please, start to add some ingredients': 
				formatedIngredients
			}
			<BurguerIngredient type='bread-bottom' />
		</div>
	)
}
export default Burguer;