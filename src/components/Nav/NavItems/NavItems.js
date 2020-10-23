import React from 'react'
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.css";
const NavItems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link='/' exact>Burguer builder</NavItem>
            <NavItem link='/orders'>Orders</NavItem>
        </ul>
    )
}

export default NavItems;
