import React from 'react'
import classes from "./CheckOutSummary.css";
import Burguer from "../../Burguer/Burguer";
import Button from "../../UI/Button/Button";



const CheckOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSumm}>
            <h1>We Hope it tastes well!</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burguer ingredients={props.ingredients}></Burguer>
            </div>
            <Button clicked={props.checkOutCancelled} btnType='Danger'>CANCEL
            </Button>
            <Button clicked={props.checkOutContinued} btnType='Success'>CONTINUE
            </Button>
        </div>
    )
}

export default CheckOutSummary
