import React from "react";

import classes from "./cart-item.module.scss";
const CartItem = props => {
	const { product, removeHandler } = props;

	const removeItemHandler = id => {
		removeHandler(id);
	};

	return (
		<>
			<div className={classes.product}>
				<img src={product.images[0]} alt={product.title} />

				<div className={classes.wrapper}>
					<div className={classes.details}>
						<p className={classes.title}>{product.title}</p>
						<p className={classes.size}>Size: {product.size[0]}</p>
						<p className={classes.color}>Color: {product.colors[1]}</p>
						<p className={classes.price}>{product.price} EGP</p>
					</div>
					<div className={classes.icon} onClick={() => removeItemHandler(product.id)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<g clip-path="url(#clip0_1_550)">
								<path
									d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C8.99622 5.48017 7.01371 5.5803 5.04 5.77998L3 5.97998"
									stroke="#FF0000"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
									stroke="#FF0000"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
									stroke="#FF0000"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10.33 16.5H13.66"
									stroke="#FF0000"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M9.5 12.5H14.5"
									stroke="#FF0000"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_550">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>

			<hr />
		</>
	);
};

export default CartItem;
