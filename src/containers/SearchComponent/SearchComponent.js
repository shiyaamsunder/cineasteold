import React from 'react'
import { useEffect } from 'react'
import { useMovList } from '../../context/MovListContext'
import MovieCard from '../MovieComponents/MovieCard/MovieCard'
import MovieCards from '../MovieComponents/MovieCards/MovieCards'
import classes from './SearchComponent.module.css'

const SearchComponent = () => {

    const { query, searchResults } = useMovList()



    return (
        <div className={classes.Search}>

            <div className={classes.ResultContainer}>
                <h1>Results</h1>
                <div className={classes.Result}>
                    {
                        searchResults.filter(movie => movie.poster_path).map(movie => (
                            <MovieCard id={movie.id} rating={movie.vote_average} title={movie.original_title} key={movie.id} url={movie.poster_path} />
                        ))
                    }
                </div>


            </div>


        </div>
    )
}

export default SearchComponent
