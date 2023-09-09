import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../utils/services/ProductsData";
import "swiper/css";
import "swiper/css/pagination";

import classes from "./product-swiper.module.scss";
import ProductCard from "./product-card";
import { Navigation, Pagination } from "swiper";

const ProductSwiper = props => {
	const { productId } = props;

	const receivedProduct = id => {
		productId(id);
	};

	return (
		<div className={classes.container}>
			<Swiper
				spaceBetween={0}
				slidesPerView={4}
				pagination={{
					type: "progressbar",
				}}
				modules={[Pagination, Navigation]}
			>
				{PRODUCTS?.map(product => (
					<SwiperSlide key={product.id}>
						<ProductCard product={product} receivedProduct={receivedProduct} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductSwiper;
