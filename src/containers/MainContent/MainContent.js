import React from 'react';
import classes from './MainContent.module.css';

import requests from '../../requests';
import MovieCards from '../MovieComponents/MovieCards/MovieCards';

function MainContent() {
	return (
		<main className={classes.MainContent}>
			<section className={classes.Welcome}>
				<h1>Welcome to Cineaste</h1>
			</section>

			<section className={classes.Section}>
				<h1>Trending Movies</h1>
				<MovieCards
					title="original_name"
					fetchUrl={requests.fetchTrending}
					onHomepage={true}
				/>
			</section>

			<section className={classes.Section}>
				<h1>Top Rated Movies</h1>
				<MovieCards
					title="original_name"
					fetchUrl={requests.fetchToprated}
					onHomepage={true}
				/>
			</section>
		</main>
	);
}

export default MainContent;
