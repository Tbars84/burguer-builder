import React from 'react'
import Aux from "../../../hoc/Auxiliar/Auxiliar";
import Backdrop from "../../UI/BackDrop/BackDrop";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.css";

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer];
    props.showSide ? attachedClasses.push(classes.Open) : attachedClasses.push(classes.Close)

    return (
        <Aux>
            <Backdrop show={props.showSide} clickedOut={props.sideDrawerHandler} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
