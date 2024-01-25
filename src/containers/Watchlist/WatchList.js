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
import { useHistory } from "react-router";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const WatchList = () => {
	const { watchList, setWatchList } = useMovList();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const history = useHistory();

	const { currentUser } = useAuth();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (currentUser) {
			onSnapshot(doc(db, "users", currentUser.displayName), (doc)=> setWatchList(doc.data().bucket))
			// db.collection("users")
			// 	.doc(currentUser.displayName)
			// 	.onSnapshot((snapshot) => setWatchList(snapshot.data().bucket));
		}
	}, [currentUser, setWatchList]);

	const arr = new Array(10);
	for (let i = 0; i <= 10; i++) {
		arr.push(i);
	}

	const handleClear = () => {

		updateDoc(doc(db, "users", currentUser.displayName), {bucket: []}).then((data) => {
			setWatchList([]);
			console.log(data);
			toggleModal();
			history.push("/");
		})
		// db.collection("users")
		// 	.doc(currentUser.displayName)
		// 	.update({
		// 		bucket: [],
		// 	})
		// 	.then((data) => {
		// 		setWatchList([]);
		// 		console.log(data);
		// 		toggleModal();
		// 		history.push("/");
		// 	});
	};

	const toggleModal = () => {
		setModalIsOpen(!modalIsOpen);
	};
	return (
		<div className={classes.WatchListContainer}>
			<div className={classes.WatchList}>
				{watchList?.length > 0 ? (
					<>
						<h2 className={classes.Heading}>Your Watchlist</h2>
						<Button
							buttonStyle={"Btn--warning--outline"}
							style={{ marginLeft: "auto" }}
							onClick={toggleModal}
						>
							Clear watchlist
						</Button>
					</>
				) : (
					<div className={classes.Info}>
						<h2>No movies added!</h2>
						<Button
							buttonStyle={"Btn--primary--outline"}
							style={{ marginLeft: "auto" }}
							onClick={() => {
								history.push("/");
							}}
						>
							Go to Home
						</Button>
					</div>
				)}

				{modalIsOpen ? (
					<>
						<Backdrop show={modalIsOpen} toggle={toggleModal} />
						<Modal toggle={toggleModal} handleBtnClick={handleClear} />
					</>
				) : null}
				<div className={classes.Movies}>
					{watchList
						? watchList.map((movie) => (
								<MovieCard
									url={movie.url}
									title={movie.title}
									rating={Number(movie.rating).toFixed(1)}
									key={movie.id}
									id={movie.id}
									onHomepage={false}
								/>
						  ))
						: arr.map((el) => <SkeletonComponent key={el} />)}

					{/* {!watchList && watchList } */}
				</div>
			</div>
		</div>
	);
};

export default WatchList;
