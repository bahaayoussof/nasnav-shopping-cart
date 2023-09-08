import React from "react";
import CartItem from "./CartItem";

import classes from "./cart.module.scss";
const Cart = props => {
	const { items, removeHandler, toggleCart } = props;

	const removeItemHandler = id => {
		removeHandler(id);
	};

	const closeCartHandler = () => {
		toggleCart(false);
	};

	const totalPrice = items?.reduce((total, item) => total + item.price * item.quantity, 0);
	const totalQuantity = items?.reduce((total, item) => (total = item.quantity), 0);

	return (
		<>
			<div className={classes.overlay} onClick={closeCartHandler}></div>
			<div className={classes.cart}>
				<div className={classes.container}>
					<div className={classes.header}>
						<p>My Cart ({totalQuantity})</p>
						<img
							src="/images/close-icon.png"
							alt="close button"
							className={classes.close}
							onClick={closeCartHandler}
						/>
					</div>

					<div className={classes.body}>
						{items?.map(item => (
							<CartItem key={item.id} product={item} removeHandler={removeItemHandler} />
						))}

						{items?.length > 0 ? (
							<div className={classes.summary}>
								<div className={classes.totalPrice}>
									<span>Sub Total</span>
									<span className={classes.totalSum}>{totalPrice.toFixed(2)} EGP</span>
								</div>
								<button className={classes.btn}>Go To Cart</button>
							</div>
						) : (
							<div className={classes.empty}>Cart is empty!</div>
            )}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
