import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';

const WatchListButton = ({ id, addedToWatchList, onHomepage, onClick }) => {



    return (
        <IconButton onClick={onClick}>

            {addedToWatchList ? <CancelIcon /> : <AddCircleIcon />}

        </IconButton>
    )
}

export default WatchListButton
