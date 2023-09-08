import React, { Component } from "react";

import classes from "./product-gallery.module.scss";
export default class ProductGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageList: this.props.images,
			selectedImage: null,
			currentIndex: 0,
		};
	}

	componentDidMount() {
		this.setState({ selectedImage: this.state.imageList[0] });
	}

	componentDidUpdate(prevProps) {
		if (prevProps.images !== this.props.images) {
			this.setState({
				imageList: this.props.images,
				selectedImage: this.props.images[0],
				currentIndex: 0,
			});
		}
	}

	selectImagesHandler = event => {
		const selectedImage = event.target.src;
		this.setState({ selectedImage });
	};

	render() {
		const { imageList, selectedImage } = this.state;
		return (
			<div className={classes.container}>
				<div className={classes.swiper}>
					{imageList?.map((image, index) => (
						<img key={index} src={image} alt={image} onClick={this.selectImagesHandler} />
					))}
				</div>
				<div className={classes.imageContainer}>
					<p className={classes.discount}>10% Off</p>
					<img src={selectedImage} alt="product view" />
				</div>
			</div>
		);
	}
}
