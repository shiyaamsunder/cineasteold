import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import classes from './Header.module.css'

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import NavItems from './NavItems/NavItems'
import SideDrawer from '../SideDrawer/SideDrawer';
import Search from './Search/Search'



const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false)


    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }



    return (
        <>
            <header id="head"
                className={classes.Header}>

                <div className={classes.NavLogo}>
                    <Link to="/">
                        <h1>Cineaste</h1>
                    </Link>
                </div>

                <div className={classes.NavRight}>
                    <div className={classes.Search}>
                        <Search  />
                    </div>
                    <div className={classes.Items}>

                        <NavItems />
                    </div>

                </div>

                <div className={classes.Burger}>
                    {!showSideBar ?
                        <IconButton onClick={toggleSideBar}>
                            <MenuIcon fontSize="large"
                                style={{ color: 'white' }} />
                        </IconButton> :

                        <IconButton onClick={toggleSideBar}>
                            <CloseIcon fontSize="large"
                                style={{ color: 'white' }} />
                        </IconButton>}
                </div>

                <SideDrawer
                    toggle={toggleSideBar}
                    show={showSideBar} />

            </header>
        </>

    )
}

export default Header
