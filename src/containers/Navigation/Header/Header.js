import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import classes from './Header.module.css'

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import NavItems from './NavItems/NavItems'
import SideDrawer from '../SideDrawer/SideDrawer';
import Search from './Search/Search'



const Header = () => {
    const [headerBg, setHeaderBg] = useState(false)
    const [showSideBar, setShowSideBar] = useState(false)


    const changeHeaderBG = () => {
        if (window.scrollY >= 40) {
            setHeaderBg(true)
        } else {
            setHeaderBg(false)
        }
    }


    const toggleSideBar = () => {
        setShowSideBar(!showSideBar)
    }


    useEffect(() => {
        window.addEventListener('scroll', changeHeaderBG)
        return () => window.removeEventListener('scroll', changeHeaderBG)
    }, [headerBg])


    return (
        <>
            <header id="head"
                className={headerBg ?
                    classes.Header + ' ' +
                    classes.active :
                    classes.Header}>

                <div className={classes.NavLogo}>
                    <Link to="/">
                        <h1>MovList</h1>
                    </Link>
                </div>

                <div className={classes.NavRight}>
                    <Search changeColor={headerBg} />
                    <NavItems changeBg={headerBg} />
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
