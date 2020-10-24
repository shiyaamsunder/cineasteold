import React, { useEffect, useState } from 'react'
import classes from './FullMovie.module.css'
import { useParams } from 'react-router-dom'
import instance from '../../../axios'
import Button from '../../../components/UI/Button/Button'
import { useMovList } from '../../../context/MovListContext'
import { useAuth } from '../../../context/AuthContext'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom'
import { db, firebase } from '../../../firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'


const FullMovie = () => {

    const { movieId } = useParams()
    const [movie, setMovie] = useState({})
    const { watchList } = useMovList()
    const history = useHistory()
    const { currentUser } = useAuth()
    const [addedToWatchList, setAddedToWatchList] = useState(false)
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY
    const Furl = `movie/${movieId}?api_key=${API_KEY}&language=en-US`


    useEffect(() => {

        if (movieId) {
            async function fetchMovie() {
                const request = await instance.get(Furl)
                setMovie(request.data)
                return request
            }

            fetchMovie()
        }

    }, [movieId, Furl])
    const imgUrl = movie && `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const backdrop = movie && `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`

    const handleClick = (id, title, url, rating) => {
        if (currentUser) {
            addedToWatchList ? RemoveFromWatchList(id) :
                AddtoWatchlist(id, title, url, rating)

        } else {
            toast.error("Please Sign In to continue", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }
    }

    const RemoveFromWatchList = (id) => {

        db.collection('users').doc(currentUser.displayName).update({
            bucket: watchList.filter(movie => movie.id !== id)
        })
        setAddedToWatchList(!addedToWatchList)
        toast.error("Removed from watchlist", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleClose = () => {
        history.goBack()

    }

    const AddtoWatchlist = (id, title, url, rating) => {
        db.collection('users').doc(currentUser.displayName).update({
            bucket: firebase.firestore.FieldValue.arrayUnion({
                id: id,
                title: title,
                url: url,
                rating: rating,
            })
        })
        setAddedToWatchList(!addedToWatchList)
        toast.success("Added to watchlist", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    useEffect(() => {

        if (watchList) {


            if ((watchList.filter(item => item.id === movie.id)).length === 1) {
                setAddedToWatchList(true)
            } else {
                setAddedToWatchList(false)
            }
        }



    }, [watchList, movie.id])

    return (


        <div className={classes.FullMovie} style={{
            backgroundImage: ` url(${movie.poster_path && backdrop})`,
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
                    {movie.poster_path ? <img src={imgUrl} alt="" /> : <h1>Loading</h1>}
                </div>
                <div className={classes.MovieDetails_Right}>
                    <h1>{movie.original_title}</h1>
                    <p> {movie.overview}</p>
                    <p>Rating: {movie.vote_average}</p>

                    <div className={classes.AddtoWatchlist}>
                        <Button
                            buttonStyle="Btn--primary--solid" buttonSize="Btn--medium"
                            onClick={() =>
                                handleClick(
                                    movie.id,
                                    movie.original_title,
                                    movie.poster_path,
                                    movie.vote_average)
                            }>{addedToWatchList ? 'Remove' : 'Add'}</Button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default FullMovie
