import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import classes from './MovieCards.module.css'
import instance from '../../../axios'
import axios from 'axios'
import SkeletonComponent from '../../../components/UI/Skeletons/SkeletonComponent';


const MovieCards = ({ fetchUrl }) => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        const source = axios.CancelToken.source()
        async function fetchData() {
            const request = await instance.get(fetchUrl, { cancelToken: source.token })
            setMovies(request.data.results)
            return request
        }
        fetchData()

        return function cleanup() {
            source.cancel()
        }
    }, [fetchUrl, setMovies])

    const arr = new Array(20)
    for(let i=0; i<=20; i++){
        arr.push(i)
    }


    return (


        <div className={classes.MovieCards}>
            {movies && movies.map(el => (
                <MovieCard title={el.title} key={el.id} url={el.poster_path} rating={Number(el.vote_average).toFixed(1)} id={el.id} onHomepage={true} />
            ))}

            {!movies && arr.map(el=> <SkeletonComponent key={el}/>)}
        </div>

    )
}

export default MovieCards
