import React, { useEffect, useState } from 'react'
import classes from './FullMovie.module.css'
import { useParams } from 'react-router-dom'
import instance from '../../../axios'
import Button from '../../../components/UI/Button/Button'
import { useMovList } from '../../../context/MovListContext'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'


const FullMovie = () => {

    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    const { isWatchList, setIsWatchList } = useMovList()
    const history = useHistory()

    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const url = `movie/${movieId}?api_key=${API_KEY}&language=en-US`


    useEffect(() => {

        if (movieId) {
            async function fetchMovie() {
                const request = await instance.get(url)
                setMovie(request.data)
                return request
            }

            fetchMovie()
        }

    }, [movieId, url])
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdrop = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`


    const handleClick = (movie) => {
        setIsWatchList(!isWatchList)

    }

    const handleClose = () => {
        history.push("/")
    }

    return (
        <div className={classes.FullMovie} style={{
            backgroundImage: ` url(${backdrop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'

        }}>


            <div className={classes.MovieDetails}>
                <div className={classes.Close}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon style={{ color: 'white', fontSize: '2rem' }} />
                    </IconButton>
                </div>


                <div className={classes.MovieDetails_Left}>
                    <img src={imgUrl} alt="" />
                </div>
                <div className={classes.MovieDetails_Right}>
                    <h1>{movie.original_title}</h1>
                    <p> {movie.overview}</p>

                    <div className={classes.AddtoWatchlist}>
                        <Button buttonStyle="Btn--primary--solid" buttonSize="Btn--medium" onClick={() => handleClick(movie)}>{
                            isWatchList ? 'Remove from watchlist' : 'Add to watchlist'
                        }</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FullMovie
