import React from 'react';
import classes from './AlertMessage.module.css'
import WarningIcon from '@material-ui/icons/Warning';

export default function AlertMessage({ errorMessage }) {
    return (
        <div className={classes.AlertMessage}>
            {errorMessage}
            <WarningIcon style={{ color: 'rgb(117, 19, 19)' }} />
        </div>
    )
}
