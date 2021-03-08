import React from "react";
import classes from "./MovieCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ url, title, rating, id }) => {
	const path = `https://image.tmdb.org/t/p/w500${url}`;

	return (
		<>
			<div className={classes.MovieContainer}>
				<Link to={`/movies/${id}`}>
					<div
						className={classes.MovieCard}
						style={{ background: `url(${path})`, backgroundSize: "cover" }}
					>
						{/* <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="" /> */}
					</div>
				</Link>
				<div className={classes.MovieInfo}>
					<h4>{title}</h4>
					<div className={classes.AddToWatchList}>
						<p>{rating + "/10"}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieCard;
