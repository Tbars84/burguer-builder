import React from 'react'
import classes from "./BuildControls.css";
import PropTypes from 'prop-types';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad' , type: 'salad'},
    {label: 'Bacon' , type: 'bacon'},
    {label: 'Cheese' , type: 'cheese'},
    {label: 'Meat' , type: 'meat'}
]

const BuildControls = (props)  => {
    return (
        <div className={classes.BuildControls}>
            <h3>Burguer price: <strong>{props.price.toFixed(2)}</strong></h3>
            {
                controls.map(ctrl => (
                    <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label} 
                        removed={() => props.ingRemoved(ctrl.type) }
                        added={() => props.ingAdded(ctrl.type) }
                        disabled={props.disabledBtn[ctrl.type]}
                    />
                ))
            }
            <button 
                onClick={props.openModal}
                className={classes.OrderButton}
                disabled={!props.purchasable}
            >Order Now</button>
        </div>
    )
}

BuildControls.propTypes = {
    price: PropTypes.number.isRequired,
    purchasable: PropTypes.bool,
    openModal: PropTypes.func,
    ingAdded: PropTypes.func,
    ingRemoved: PropTypes.func,
}

export default BuildControls;
