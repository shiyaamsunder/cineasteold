import React from 'react';
import classes from './Search.module.css'

import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const Search = ({ changeColor }) => {
    return (
        <div className={changeColor ?
            classes.Search + ' ' +
            classes.active :
            classes.Search}>

            <input
                type="text"
                placeholder='Search for any movie'>
            </input>

            <IconButton>
                <SearchIcon style={{ color: '#7B6CD9' }} />
            </IconButton>
        </div>
    )
}

export default Search
