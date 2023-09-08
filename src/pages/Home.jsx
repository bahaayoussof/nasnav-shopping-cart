import React from "react";
import { Link } from "react-router-dom";

import classes from "./home.module.scss";
const Home = () => {
	return (
		<div className={classes.home}>
			<img src="/images/home-logo.png" alt="Home logo" />

			<Link to="product">Go to Product Page</Link>
		</div>
	);
};

export default Home;
