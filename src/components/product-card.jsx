import React from "react";
import classes from "./product-card.module.scss";

const ProductCard = props => {
	const { product, receivedProduct } = props;

	return (
		<div className={classes.card} onClick={() => receivedProduct(product.id)}>
			<div className={classes.image}>
				<img src={product.images[0]} alt={product.title} />

				<div className={classes.view}>
					<img src="/images/360-img.svg" alt="360 degree view" />
				</div>
			</div>

			<div className={classes.body}>
				<h2 className={classes.title}>{product.title}</h2>
				<p className={classes.description}>{product.description}</p>
				<img src={`/images/stars-${product.rate}.svg`} alt="product rate" />

				<h3 className={classes.price}>{product.price} EGP</h3>
			</div>

			<div className={classes.actions}>
				<button>Add To Cart</button>
				<img src="/images/wish-list.svg" alt="wishlist" />
			</div>
		</div>
	);
};

export default ProductCard;
