import React, { Component } from 'react'
import {connect} from "react-redux";
import * as actionOrderCreator from "../../store/actions/order";
import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner';
import axInstance from '../../shared/axiosInstances/Axios'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

class Orders extends Component {

	componentDidMount(){
		this.props.onFetchOrderLists();
	}
	render() {
		let orders = <Spinner/>;
		if (!this.props.loading) {
			orders = this.props.orders.map( order => (
						<Order 
						key={order.id}
						ingredients={order.ingredients}
						price={order.price}
						/>
					))
		}
		return (
			<div>
				{orders}
			</div>
		)
	}
}

const mapStateToProps = state  => {
	return {
			orders: state.orderReducer.orders,
			loading: state.orderReducer.loading
	}
}

const mapDispatchToProps = dispatch  => {
	return {
			onFetchOrderLists: () => dispatch(actionOrderCreator.fetchOrders())
	}
}
export default connect(mapStateToProps , mapDispatchToProps)(ErrorHandler(Orders , axInstance))
