import React, { useEffect, useState } from 'react'
import classes from './SignOutNav.module.css'

import { Link } from "react-router-dom";
import NavItem from '../NavItem/NavItem'
import Button from '../../../../../components/UI/Button/Button'
import { useLocation } from 'react-router-dom'
function SignOutNav({ logout }) {
    const [onHome, setOnHome] = useState(true)
    const location = useLocation()

    useEffect(() => {

        if (location.pathname !== "/") {
            setOnHome(onHome => !onHome)
        }
    }, [location.pathname])
    return (
        <div className={classes.NavSignOut}>
            {onHome ? <Link to="/my-watchlist">
                <NavItem name="My WatchList" />
            </Link> : <Link to="/"> <NavItem name="Home" /></Link>}


            <Link to="/">
                <Button onClick={logout} buttonStyle="Btn--primary--solid">SignOut</Button>
            </Link>

        </div>
    )
}

export default SignOutNav
