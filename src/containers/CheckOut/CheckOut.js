import React, { Component } from 'react'
import { Route , Redirect } from "react-router-dom";
import {connect} from "react-redux";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import ContactData from "./ContactData/ContactData";

class CheckOut extends Component {

    checkOutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }
    checkOutCancelledHandler = () => {
        this.props.history.goBack()
    }
    contactDataProps = (props) =>{
        return (
            <ContactData {...props} 
            ingredients={this.state.ingredients} 
            totalPrice={this.state.totalPrice} />
        )
    }
    render() {
        let summary = <Redirect to="/" />
        console.log(this.props.purchased);
        let purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        if (this.props.ings) {
            summary = (<div>
            {purchasedRedirect}
            <CheckOutSummary ingredients={this.props.ings}
            checkOutContinued={this.checkOutContinuedHandler} checkOutCancelled={this.checkOutCancelledHandler}/>
            <hr/>
            <Route path={this.props.match.path + '/contact-data'}  component={ContactData} ></Route>
            </div>)
        }
        return summary
    }
}

const mapStateToProps = state  => {
    return {
        ings: state.burguerReducer.ingredients,
        totalPrice: state.burguerReducer.totalPrice,
        purchased: state.orderReducer.purchased
        
    }
}


export default connect(mapStateToProps)(CheckOut);
