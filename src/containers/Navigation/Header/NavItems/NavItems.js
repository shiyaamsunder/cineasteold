import React, { useState } from 'react'
import classes from './NavItems.module.css'

import SignInNav from './SignInNav/SignInNav'
import SignOutNav from './SignOutNav/SignOutNav'

import { useAuth } from "../../../../context/AuthContext";
import { useHistory } from 'react-router-dom'




const NavItems = (props) => {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push("/signin")
        } catch {
            setError('Failed to logout')
            console.log(error)
        }
    }

    return (
        <ul className={classes.NavItems}>
            {currentUser ?
                <SignOutNav
                    user={currentUser}
                    logout={handleLogout}
                    changeBg={props.changeBg} /> :
                <SignInNav changeBg={props.changeBg} />}
        </ul >

    )
}

export default NavItems
