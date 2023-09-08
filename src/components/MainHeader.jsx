import React from "react";

import classes from "./main-header.module.scss";
const MainHeader = () => {
	return (
		<nav className={classes.header}>
			<div className={classes.logo}>
				<img src="/images/burger-menu.svg" alt="burger menu" />
				<img src="/images/logo.png" alt="brand logo" />
			</div>

			<ul className={classes.links}>
				<li>Products</li>
				<li>Best Seller</li>
				<li>New Arrival</li>
				<li>About Us</li>
				<li>Contact Us</li>
			</ul>

			<ul className={classes.icons}>
				<li>
					<img src="/images/search-icon.svg" alt="search" />
				</li>
				<li>
					<img src="/images/cart-icon.svg" alt="cart" />
				</li>
				<li>
					<img src="/images/user-icon.svg" alt="user" />
				</li>
			</ul>
		</nav>
	);
};

export default MainHeader;
