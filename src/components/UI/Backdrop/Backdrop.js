import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = ({ show, toggle }) => (
    <div onClick={toggle} className={show ? classes.Backdrop : null}>
    </div>
)
export default Backdrop
