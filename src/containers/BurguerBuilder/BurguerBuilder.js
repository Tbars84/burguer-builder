import React, { Component } from 'react'
import {connect} from "react-redux";
import * as actionCreator from "../../store/actions/burguerBuilder";
import * as actionOrderCreator from "../../store/actions/order";
import Aux from '../../hoc/Auxiliar/Auxiliar'
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuildControls/BuildControls';
import ErrorHandler from "../../hoc/ErrorHandler/ErrorHandler";
import axInstance from '../../shared/axiosInstances/Axios';


class BurguerBuilder extends Component {
    state = {
        modalOpen: false
        // Manejo de estados con los ciclos de vida sin redux 
        // loading: false,
        // errorIng: false
    }
    componentDidMount(){
        this.props.initIngredients();
        // Llamada sin redux usando asincronismo con los ciclos de vida de react 
        // axInstance.get('ingredients.json')
        // .then(resp => {
        //     console.log(JSON.stringify(resp.data));
        //     this.setState({ingredients: resp.data})
        // })
        // .catch(err =>{ 
        //     this.setState({errorIng: true})
        // })
    }

    updatePurchasable = (ingredients)=> {
        const sumIng = Object.keys(ingredients)
            .map((ingKey) =>{
                return ingredients[ingKey];
            })
            .reduce((sumIng , el)=>{
                return sumIng + el
            }, 0)
        return sumIng > 0
    }
    continuePurchase = () =>{
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    modalHandler =() => {
		this.setState( (prevState) =>{
			return { modalOpen : !prevState.modalOpen}
		})
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let ordeSummary = null;
        let burguer = this.props.errorIng ? <p>Our server´s made a ups</p> : <Spinner />
        if (this.props.ings) { 
            burguer = (<Aux><Burguer ingredients={this.props.ings} />
                <BuildControls price={this.props.totalPrice} ingAdded={this.props.onIngredientAdded} openModal={this.modalHandler} 
                ingRemoved={this.props.onIngredientRemoved} purchasable={this.updatePurchasable(this.props.ings)} disabledBtn={disabledInfo}/></Aux>);
            ordeSummary = <OrderSummary closeModal={this.modalHandler} price={this.props.totalPrice} continuePurchase={this.continuePurchase} ingredients={this.props.ings} />
        }
        return(
            <Aux>
                <Modal show={this.state.modalOpen} closedModal={this.modalHandler}>
                    {ordeSummary}
                </Modal>
                {burguer}
            </Aux>
        )
    }
}

const mapStateToProps = state  => {
    return {
        ings: state.burguerReducer.ingredients,
        totalPrice: state.burguerReducer.totalPrice,
        errorIng: state.burguerReducer.errorIng
    }
}
const mapDispatchToProps = dispatch  => {
    return {
        onIngredientAdded: (ingName) => dispatch(actionCreator.add_Ingredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionCreator.remove_Ingredient(ingName)),
        initIngredients: () => dispatch(actionCreator.initIngredients()),
        onInitPurchase: () => dispatch(actionOrderCreator.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurguerBuilder , axInstance));