import React from 'react'
import classes from './Input.css'

const Input = (props) => {
	let inputElement = null;
	const inputClasses = [ classes.InputElement]
	if (!props.valid && props.shouldValid) {
		inputClasses.push(classes.Invalid)
	}

	switch (props.inputtype) {
		case ('input'):
			inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}  />
			break;
		case ('textArea'):
			inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}></textarea>
			break;		
		case ('select'):
			inputElement = <select className={inputClasses.join(' ')}  onChange={props.changed}>
											{
												props.elementConfig.options.map(option => (
												<option key={option.value} value={option.value}>{option.displayValue}</option>
												))
											}
										</select>
			break;		
		default:
			inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} defaultValue={props.value} onChange={props.changed}  />
	}
	return (
		<div className={classes.Input}>
			<label className={classes.Label} htmlFor="">{props.label}</label>
			{inputElement}
		</div>
	)
}

export default Input
