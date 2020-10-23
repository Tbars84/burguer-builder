import React, { Component } from 'react'
import classes from "./Modal.css";
import Aux from "../../../hoc/Auxiliar/Auxiliar";
import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component {
    // shouldComponentUpdate(nextProps , nextState){
    //     return nextProps.show !== this.props.show
    // }

    render(){
        return (
            <Aux>
                <BackDrop show={this.props.show} 
                clickedOut={this.props.closedModal} 
                />
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)':'translateY(-150vh)',
                        opacity: this.props.show ? '1':'0'
                    }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal
