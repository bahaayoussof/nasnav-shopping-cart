import React, { Component } from "react";
import MainHeader from "../components/MainHeader";

import classes from "./product.module.scss";
import Breadcrumb from "../components/Breadcrumb";
class Product extends Component {
	render() {
		return (
			<>
				<header>
					<MainHeader />
					<Breadcrumb />
				</header>
				<main>
					<div>Product</div>
				</main>
			</>
		);
	}
}

export default Product;
