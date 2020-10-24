import React from 'react'
import classes from './MainContent.module.css'

import requests from '../../requests'
import MovieCards from '../MovieComponents/MovieCards/MovieCards';



function MainContent() {
    return (
        <main className={classes.MainContent}>

            <div className={classes.Welcome}>
                <h1>Welcome to Cineaste</h1>
            </div>

            <div className={classes.Trending}>
                <h1>Trending Movies</h1>
                <MovieCards
                    title='original_name'
                    fetchUrl={requests.fetchTrending}
                    onHomepage={true} />
                <h1>Top Rated Movies</h1>
                <MovieCards
                    title='original_name'
                    fetchUrl={requests.fetchToprated}
                    onHomepage={true} />


            </div>

        </main>
    )
}

export default MainContent
