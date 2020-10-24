import React from 'react';
import MovieCard from '../MovieComponents/MovieCard/MovieCard';
import classes from './WatchList.module.css'
import { useMovList } from '../../context/MovListContext'


const WatchList = () => {

    const { watchList } = useMovList()


    return (
        <div className={classes.WatchListContainer}>
            <div className={classes.WatchList}>
                <h2>Your Watchlist</h2>
                <div className={classes.Movies}>
                    {watchList.length < 1 ? <h1>Nothing here</h1> : watchList.map(movie => (
                        <MovieCard url={movie.url} title={movie.title} rating={movie.rating} key={movie.id} id={movie.id} onHomepage={false} />
                    ))}

                </div>


            </div>
        </div>
    )
}

export default WatchList
