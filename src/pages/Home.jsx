import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/progress-bar";

import classes from "./home.module.scss";
const Home = () => {
	const navigate = useNavigate();
	return (
		<div className={classes.home}>
			<img src="/images/home-logo.png" alt="Home logo" />
			<ProgressBar navigate={navigate} />
		</div>
	);
};

export default Home;
