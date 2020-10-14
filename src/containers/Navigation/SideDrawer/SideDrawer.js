
import React from 'react';

import NavItems from '../Header/NavItems/NavItems';
import Search from '../Header/Search/Search';
import Layout from '../../../components/Layout/Layout';
import classes from './SideDrawer.module.css'
import Backdrop from '../../../components/UI/Backdrop/Backdrop';


const SideDrawer = ({ show, toggle }) => {


    let cNames = [classes.SideDrawer, classes.active]

    return (
        <Layout>
            <Backdrop toggle={toggle} show={show} />

            <div className={show ? cNames.join(' ') : classes.SideDrawer}>
                <Search />
                <NavItems />
            </div>
        </Layout>



    )
}

export default SideDrawer
