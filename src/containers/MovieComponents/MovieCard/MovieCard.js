import React from 'react';
import classes from './MovieCard.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { useAuth } from '../../../context/AuthContext';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const MovieCard = ({ url, title, rating, id, isWatchList, onHomepage }) => {

    const { addToWatchList, watchList, removeFromWatchList, currentUser, onhomepage, setOnHomePage } = useAuth()
    const path = `https://image.tmdb.org/t/p/w500${url}`


    const handleClick = (id, title, url, rating) => {

        if (currentUser) {
            isWatchList ? removeFromWatchList(id) :
                addToWatchList(id, title, url, rating)
            console.log(watchList)
            setOnHomePage(!onHomepage)
        } else {
            alert('Please log in to continue')
        }



    }

    const AddToButton = (props) => (
        <div className={classes.AddToWatchList}>
            <Tooltip arrow placement="top" title="Add to watchList">
                <IconButton onClick={props.handleClick}>
                    <AddCircleIcon style={{ color: 'white' }} />
                </IconButton>
            </Tooltip>
        </div>

    )

    const AddedButton = (props) => (
        <div className={classes.AddToWatchList}>
            <Tooltip arrow placement="top" title="Remove from watchList">
                <IconButton onClick={props.handleClick}>
                    <CheckCircleIcon style={{ color: 'white' }} />
                </IconButton>
            </Tooltip>
        </div>
    )


    return (

        <div className={classes.MovieContainer}>
            <div className={classes.MovieCard} style={{ background: `url(${path})`, backgroundSize: 'cover' }}>
                {/* <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="" /> */}
            </div>

            <div className={classes.MovieInfo}>
                <h4>{title}</h4>


                <div className={classes.AddToWatchList}>
                    <p>{rating + '/10'}</p>
                    {!isWatchList && onhomepage ?
                        <AddToButton
                            handleClick={() => handleClick(id, title, url, rating)} /> :
                        <AddedButton
                            handleClick={() => handleClick(id, title, url, rating)} />}
                </div>


            </div>




        </div>

    )
}

export default MovieCard
