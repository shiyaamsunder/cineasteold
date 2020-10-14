import React from 'react';
import { useAuth } from '../../context/AuthContext';
import MovieCard from '../MovieComponents/MovieCard/MovieCard';
import classes from './WatchList.module.css'

const WatchList = () => {
    const { watchList } = useAuth()
    return (
        <div className={classes.WatchListContainer}>
            <div className={classes.WatchList}>
                <h2>Your Watchlist</h2>
                <div className={classes.Movies}>

                    {watchList.map(movie => (
                        <MovieCard url={movie.url} title={movie.title} rating={movie.rating} key={movie.id} id={movie.id} isWatchList={true} onHomepage={false} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default WatchList
