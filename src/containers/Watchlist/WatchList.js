import React, { useEffect, useState } from "react";
import SkeletonComponent from "../../components/UI/Skeletons/SkeletonComponent";
import MovieCard from "../MovieComponents/MovieCard/MovieCard";
import classes from "./WatchList.module.css";
import { useMovList } from "../../context/MovListContext";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const WatchList = () => {
	const { watchList, setWatchList } = useMovList();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const { currentUser } = useAuth();
	useEffect(() => {
		window.scrollTo(0, 0);
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

	const handleClear = () => {
		console.log("clear");
		toggleModal();
	};

	const toggleModal = () => {
		setModalIsOpen(!modalIsOpen);
	};
	return (
		<div className={classes.WatchListContainer}>
			<div className={classes.WatchList}>
				<h2 className={classes.Heading}>Your Watchlist</h2>

				<Button
					buttonStyle={"Btn--warning--outline"}
					style={{ marginLeft: "auto" }}
					onClick={handleClear}
				>
					Clear watchlist
				</Button>

				{modalIsOpen ? (
					<>
						<Backdrop show={modalIsOpen} toggle={toggleModal} />
						<Modal toggle={toggleModal} />
					</>
				) : null}
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
