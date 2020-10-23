import React from 'react'
import classes from "./BackDrop.css";
const BackDrop = (props) => {
    return props.show ? 
    <div 
    className={classes.Backdrop}
    onClick={props.clickedOut}></div> 
    : null
}

export default BackDrop
