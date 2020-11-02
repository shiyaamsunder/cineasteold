import React from 'react'
import classes from './SignInNav.module.css'

import { Link } from "react-router-dom";
import NavItem from '../NavItem/NavItem'

function SignInNav() {
    return (

        <div className={classes.NavSignIn}>
            <Link to="/signin">
                <NavItem name="Sign In"/>
            </Link>

            <Link to="/register">
                <NavItem
                    name="Register"/>
            </Link>
        </div>

    )
}

export default SignInNav
