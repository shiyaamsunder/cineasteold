import React, { useEffect } from 'react';
import MovieCard from '../MovieComponents/MovieCard/MovieCard';
import classes from './WatchList.module.css'
import { useMovList } from '../../context/MovListContext'
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';


const WatchList = () => {

    const { watchList, setWatchList } = useMovList()
    const { currentUser } = useAuth()
    useEffect(() => {
        if (currentUser) {
            db.collection('users').doc(currentUser.displayName).onSnapshot(snapshot => setWatchList(snapshot.data().bucket))
        }
    }, [currentUser, setWatchList])

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
