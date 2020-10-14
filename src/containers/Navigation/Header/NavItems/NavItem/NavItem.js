import React from 'react'
import classes from './NavItem.module.css'
const NavItem = (props) => {
    return (
        <li className={props.changeColor ? classes.NavItem + ' ' + classes.active : classes.NavItem}>
            {props.name}
        </li>

    )
}

export default NavItem
