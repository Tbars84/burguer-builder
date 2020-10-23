import React from 'react'
import Aux from "../../../hoc/Auxiliar/Auxiliar";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredientsSumm = Object.keys(props.ingredients)
        .map(igKey =>{
            return (
            <li key={igKey}>
                <span>{igKey}: </span> {props.ingredients[igKey]} 
            </li>)
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burguer with the following ingredients:</p>
            <ul>
                {ingredientsSumm}
            </ul>
            <p><strong>Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.closeModal}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary
