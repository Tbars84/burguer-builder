import * as actionTypes from "./actionTypes";
import axInstance from '../../shared/axiosInstances/Axios';

export const purchaseBurguerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGUER_SUCCESS,
		orderId: id,
		orderData: orderData
	}
}
export const purchaseBurguerFailed = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGUER_FAIL,
		error: error
	}
}
export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	}
}
export const purchaseBurguerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGUER_START
	}
}
export const purchaseBurguer = (orderData) => {
	return dispatch => {
		dispatch(purchaseBurguerStart())
		axInstance.post('orders.json', orderData)
		.then(resp =>{
			console.log(resp.data , orderData);
			dispatch(purchaseBurguerSuccess(resp.data.name, orderData));
		})
		.catch(err => {
			dispatch(purchaseBurguerFailed(err));
		})
	}
}

// Fetch Orders List 
export const fetchOrdersStart = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_START,
		orders
	}
}
export const fetchOrdersSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders
	}
}
export const fetchOrdersFailed = () => {
	return {
		type: actionTypes.FETCH_ORDERS_FAILED,
	}
}

export const fetchOrders = () => {
	return dispatch => {
		axInstance.get('/orders.json')
		.then(res => {
			const fetchedOrders = [];
			for (const key in res.data) {
				fetchedOrders.push({
					...res.data[key],
					id: key
				})
			}

			dispatch(fetchOrdersSuccess(fetchedOrders));
		})
		.catch(err => {
			dispatch(fetchOrdersFailed(err));
		})
	}
}