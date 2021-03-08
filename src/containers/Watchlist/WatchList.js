import React, { useEffect } from "react";
import SkeletonComponent from "../../components/UI/Skeletons/SkeletonComponent";
import MovieCard from "../MovieComponents/MovieCard/MovieCard";
import classes from "./WatchList.module.css";
import { useMovList } from "../../context/MovListContext";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";

const WatchList = () => {
	const { watchList, setWatchList } = useMovList();
	const { currentUser } = useAuth();
	useEffect(() => {
		if (currentUser) {
			db.collection("users")
				.doc(currentUser.displayName)
				.onSnapshot((snapshot) => setWatchList(snapshot.data().bucket));
		}
	}, [currentUser, setWatchList]);

	const arr = new Array(10);
	for (let i = 0; i <= 10; i++) {
		arr.push(i);
	}

	return (
		<div className={classes.WatchListContainer}>
			<div className={classes.WatchList}>
				<h2>Your Watchlist</h2>
				<div className={classes.Movies}>
					{watchList &&
						watchList.map((movie) => (
							<MovieCard
								url={movie.url}
								title={movie.title}
								rating={movie.rating}
								key={movie.id}
								id={movie.id}
								onHomepage={false}
							/>
						))}

					{!watchList && arr.map((el) => <SkeletonComponent key={el} />)}
				</div>
			</div>
		</div>
	);
};

export default WatchList;
