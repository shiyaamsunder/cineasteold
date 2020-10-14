import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import classes from './MovieCards.module.css'
import instance from '../../../axios'
import axios from 'axios'


const MovieCards = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([])




    useEffect(() => {
        const source = axios.CancelToken.source()
        async function fetchData() {
            const request = await instance.get(fetchUrl, { cancelToken: source.token });
            setMovies(request.data.results)

            return request


            // const res = await fetch(url)
            // const data = await res.json()
            // setData(data.results)
            // console.log(data)
        }
        fetchData()

        return function cleanup() {
            source.cancel()
        }
    }, [fetchUrl])




    return (


        <div className={classes.MovieCards}>
            {movies.map(el => (
                <MovieCard title={el.title} key={el.id} url={el.poster_path} rating={el.vote_average} id={el.id} isWatchList={false} onHomepage={true} />
            ))}
        </div>

    )
}

export default MovieCards
