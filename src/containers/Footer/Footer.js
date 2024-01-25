import React from "react";
import classes from "./Footer.module.css";
import GitHubIcon from "@material-ui/icons/GitHub";
// import { version } from "../../../package.json";	

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.footer__container}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/shiyaamsunder/MovList"
				>
					<GitHubIcon style={{ fontSize: "2rem" }} />
				</a>

				<div className={classes.footer__info}>
					{/* <p>v{version}</p> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
