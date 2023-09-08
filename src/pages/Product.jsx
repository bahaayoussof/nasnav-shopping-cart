import React, { Component } from "react";
import MainHeader from "../components/MainHeader";

import classes from "./product.module.scss";
class Product extends Component {
	render() {
		return (
			<>
				<header>
					<MainHeader />
				</header>
				<main>
					<div>Product</div>
				</main>
			</>
		);
	}
}

export default Product;
