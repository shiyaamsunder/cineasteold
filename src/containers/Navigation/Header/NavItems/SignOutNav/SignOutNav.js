import React from 'react'
import classes from './SignOutNav.module.css'

import { Link } from "react-router-dom";
import NavItem from '../NavItem/NavItem'
import Button from '../../../../../components/UI/Button/Button'

function SignOutNav({ changeBg, logout }) {
    return (
        <div className={classes.NavSignOut}>
            <Link to="/my-watchlist">
                <NavItem name="My WatchList" changeColor={changeBg} />
            </Link>

            <Link to="/">
                <Button onClick={logout} buttonStyle="Btn--primary--solid">SignOut</Button>
            </Link>

        </div>
    )
}

export default SignOutNav
