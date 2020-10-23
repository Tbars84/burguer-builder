import React, { Component } from 'react'
import classes from "./ContactData.css";
import {connect} from "react-redux";
import * as actionCreator from "../../../store/actions/order";
import ErrorHandler from "../../../hoc/ErrorHandler/ErrorHandler";
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from "../../../components/UI/Button/Button";
import Input from '../../../components/UI/Input/Input'
import axInstance from '../../../shared/axiosInstances/Axios';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: ' Your Name'
				},
				value: '',
				valid: true,
				validation: {
					required: true
				}
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: ' Your Email'
				},
				value: '',
				valid: true,
				validation: {
					required: true
				}
			},
			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: ' Your Street'
				},
				value: '',
				valid: true,
				validation: {
					required: true
				}
			},
			city: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: ' Your City'
				},
				value: '',
				valid: true,
				validation: {
					required: true
				}
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{value: 'fastest', displayValue: 'Fastest'},
						{value: 'cheapest', displayValue: 'Cheapest'}
					]
				},
				value: 'Fastest',
				valid: true,
				validation: {
					required: false
				}
			},
			postalCode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your zipcode'
				},
				value: '',
				valid: true,
				validation: {
					required: true
				}
			}
		},
		formIsValid: false,
	}
	orderHandler = (event) =>{
		event.preventDefault();
		const formData = {};
		for (const elementForm in this.state.orderForm) {
			formData[elementForm] = this.state.orderForm[elementForm].value
		}
		const order = {
		    ingredients : this.props.ings,
		    price: this.props.totalPrice,
		    orderData: formData
		}
		this.props.onOrderBurguer(order);
	}
	inputchangedHandler = (event , id) =>{
		const updatedOrderForm = {
			...this.state.orderForm,
		}
		let isFormValid = true;
		updatedOrderForm[id].value = event.target.value;
		updatedOrderForm[id].valid = this.checkValid(updatedOrderForm[id].value , updatedOrderForm[id].validation);

		for (const inputId in updatedOrderForm) {
			isFormValid = updatedOrderForm[inputId] && isFormValid;
		}
		this.setState({
			orderForm: updatedOrderForm,
			formIsValid: isFormValid
		})
	}
	checkValid = (value , rules) =>{
		let isValid = false;
		if (rules.required) {
			isValid = value.trim() !== '';
		}
		return isValid;
	}
	render() {
		const formElementsArray = [];
		for (const key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			})
		}
		let form = (<form>
			{formElementsArray.map(formEl => (
				<Input 
					key={formEl.id}
					inputtype={formEl.config.elementType} 
					elementConfig={formEl.config.elementConfig} 
					value={formEl.config.value}
					valid={formEl.config.valid}
					shouldValid={formEl.config.validation.required}
					changed={(event)=> this.inputchangedHandler(event, formEl.id)}
				/>
			))}
			<Button
			btnType='Success'
			disabled={!this.state.formIsValid}
			clicked={this.orderHandler}>Order</Button>
		</form>);
		if (this.props.loading) {
			form = <Spinner />
		}
		return (
			<div className={classes.ContactData} >
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		)
	}
}

const mapStateToProps = state  => {
	return {
			ings: state.burguerReducer.ingredients,
			totalPrice: state.burguerReducer.totalPrice,
			loading: state.orderReducer.loading
	}
}
const mapDispatchToProps = dispatch  => {
	return {
		onOrderBurguer: (orderData) => dispatch(actionCreator.purchaseBurguer(orderData))
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(ErrorHandler(ContactData , axInstance)) 
