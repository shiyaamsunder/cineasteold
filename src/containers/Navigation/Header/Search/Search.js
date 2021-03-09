import React from "react";
import classes from "./Search.module.css";

import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { useMovList } from "../../../../context/MovListContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../components/UI/Toast/toast.css";

const Search = ({ changeColor }) => {
	const { query, setQuery, setSearchResults } = useMovList();

	const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
	const url = `
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (query === "" || !query) {
			toast.error("Type something", {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			return;
		}
		const res = await fetch(url);
		const data = await res.json();
		setSearchResults(data.results);
		setQuery("");
		history.push("/search");
	};
	return (
		<form
			className={
				changeColor ? classes.Search + " " + classes.active : classes.Search
			}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder={`'Avengers'`}
			></input>
			<IconButton onClick={handleSubmit}>
				<SearchIcon style={{ color: "var(--primaryColor)" }} />
			</IconButton>
		</form>
	);
};

export default Search;
