import React, { Component} from 'react'
import Toolbar from "../../components/Nav/ToolBar/ToolBar";
import Aux from '../Auxiliar/Auxiliar'
import SideDrawer from "../../components/Nav/SideDrawer/SideDrawer";
import classes from './Layout.css'

class Layout extends Component {
	state = {
		showDrawer: false
	}

	sideDrawerHandler = () => {
		this.setState( (prevState) =>{
			return { showDrawer : !prevState.showDrawer}
		})
	}

	render() {
		return(
		<Aux>
			<Toolbar sideDrawerHandler={this.sideDrawerHandler} />
			<SideDrawer showSide={this.state.showDrawer} sideDrawerHandler={this.sideDrawerHandler} />
			<main className={classes.Content}>
				{this.props.children}
			</main>
		</Aux>
		)
	}
}
export default Layout;