import React, { Component } from "react";
import MainHeader from "../components/main-header";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetails from "../components/product-details";
import Cart from "../components/cart";
import ProductSwiper from "../components/product-swiper";

import classes from "./product.module.scss";
class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 0,
			showCart: false,
			productId: 1,
			cartItems: [],
		};
	}

	toggleCartHandler = isShow => {
		this.setState({ showCart: isShow });
	};

	showProductDetails = productId => {
		this.setState({ productId });
	};

	addToCartHandler = (product, quantity) => {
		const { cartItems } = this.state;
		const itemIndex = cartItems.findIndex(item => item.id === product.id);
		if (itemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[itemIndex].quantity += quantity;
			this.setState({ cartItems: updatedCartItems });
		} else {
			product.quantity = quantity;
			this.setState({ cartItems: [...cartItems, product] });
		}
	};

	removeFromCartHandler = itemId => {
		const updatedCartItems = this.state.cartItems.filter(item => item.id !== itemId);
		this.setState({ cartItems: updatedCartItems });
	};

	render() {
		const count = this.state.cartItems.reduce((total, item) => total + item.quantity, 0);

		return (
			<>
				<header>
					<MainHeader quantity={count} toggleCart={this.toggleCartHandler} />
					<Breadcrumb />
				</header>
				<main>
					<ProductDetails
						productId={this.state.productId}
						receivedProduct={this.addToCartHandler}
					/>

					{this.state.showCart && (
						<Cart
							items={this.state.cartItems}
							removeHandler={this.removeFromCartHandler}
							toggleCart={this.toggleCartHandler}
						/>
					)}

					<div className={classes.container}>
						<h2>You May Also Like</h2>
					</div>
					<ProductSwiper productId={this.showProductDetails} />
				</main>
			</>
		);
	}
}

export default Product;
