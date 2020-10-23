import React from 'react'
import classes  from "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
const ToolBar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.DrawerToggle} 
            onClick={props.sideDrawerHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.DesktopOnly}>
                <NavItems />
            </div>
        </header>
    )
}

export default ToolBar
