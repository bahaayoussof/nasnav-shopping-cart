import React, { Component } from "react";
import { Line } from "rc-progress";

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
		};
	}

	componentDidMount() {
		this.progressInterval = setInterval(this.incrementProgress, 700);
	}

	componentWillUnmount() {
		clearInterval(this.progressInterval);
	}

	incrementProgress = () => {
		if (this.state.progress < 100) {
			this.setState(prevState => ({
				progress: prevState.progress + 20,
			}));
		} else {
			clearInterval(this.progressInterval);
			this.props.navigate("/product");
		}
	};

	render() {
		return (
			<div style={{ width: "600px" }}>
				<Line
					percent={this.state.progress}
					strokeWidth={2}
					trailWidth={2}
					strokeColor="#874a4a"
				/>
			</div>
		);
	}
}

export default ProgressBar;
