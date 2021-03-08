import React from "react";
import Button from "../Button/Button";
import classes from "./Modal.module.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

const Modal = ({ toggle }) => {
	return (
		<div className={classes.ModalContainer}>
			<IconButton className={classes.Close} onClick={toggle}>
				<CloseIcon />
			</IconButton>
			<div className={classes.Modal}>
				<h3>Do you really want to clear all the movies in your watchlist?</h3>

				<div>
					<Button buttonStyle="Btn--warning--outline">Clear all movies</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
