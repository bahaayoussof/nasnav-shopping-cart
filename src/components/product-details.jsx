import React, { Component } from "react";
import { PRODUCTS } from "../utils/services/ProductsData";
import ProductGallery from "./product-gallery";
import classes from "./product-details.module.scss";

export default class ProductDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productId: this.props.productId,
			quantity: 1,
		};
	}

	addToCartHandler = item => {
		const itemQuantity = this.state.quantity;
		this.props.receivedProduct(item, itemQuantity);
	};

	increaseQuantityHandler = () => {
		this.setState({ quantity: this.state.quantity + 1 });
	};

	decreaseQuantityHandler = () => {
		this.setState({ quantity: this.state.quantity - 1 });
	};

	render() {
		const selectedProduct = PRODUCTS?.find(item => item.id === this.props.productId);

		return (
			<section className={classes.details}>
				<ProductGallery images={selectedProduct.images} />

				<div className={classes.container}>
					<div className={classes.header}>
						<div className={classes.title}>
							<p>{selectedProduct.title}</p>
							<img src={`/images/stars-${selectedProduct.rate}.svg`} alt="rate" />
						</div>
						<img src="/images/large-360.png" alt="360degree view" />
					</div>

					<div className={classes.body}>
						<div className={classes.price}>
							<h3>{selectedProduct.price} EGP</h3>
							{selectedProduct.discount && <del>{selectedProduct.discount} EGP</del>}
						</div>

						<p className={classes.description}>{selectedProduct.description}</p>

						<div className={classes.size}>
							<p className={classes.title}>Size</p>
							<div>
								{selectedProduct?.size.map((size, index) => (
									<button key={index}>{size}</button>
								))}
							</div>
						</div>

						<div className={classes.color}>
							<p className={classes.title}>Color</p>
							<div className={classes.icon}>
								{selectedProduct?.colors.map(color => (
									<img key={color} src={`/images/${color}-color.svg`} alt={color} />
								))}
							</div>
						</div>
					</div>

					<div className={classes.actions}>
						<div className={classes.top}>
							<div className={classes.quantity}>
								<button
									onClick={this.decreaseQuantityHandler}
									disabled={this.state.quantity === 1}
								>
									-
								</button>
								<div>{this.state.quantity}</div>
								<button onClick={this.increaseQuantityHandler}>+</button>
							</div>

							<button
								className={classes.buy}
								onClick={() => this.addToCartHandler(selectedProduct)}
							>
								Buy Now
							</button>
						</div>

						<div className={classes.bottom}>
							<ul className={classes.icons}>
								<li>
									<img src="/images/wish-list-1.svg" alt="wishlist" />
									<span>add to wishlist</span>
								</li>
								<li>
									<img src="/images/video-call.svg" alt="video call" />
									<span>video call</span>
								</li>
								<li>
									<img src="/images/share-icon.svg" alt="share icon" />
									<span>share</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
