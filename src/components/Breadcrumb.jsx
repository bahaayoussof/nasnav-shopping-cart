import classes from "./breadcrumb.module.scss";

const Breadcrumb = () => {
	return (
		<nav className={classes.breadcrumb}>
			<ul>
				<li>Home</li>
				<span>/</span>
				<li>All Rugs</li>
				<span>/</span>
				<li>Kilim & Tulu</li>
				<span>/</span>
				<li>Name Of Product</li>
			</ul>
		</nav>
	);
};

export default Breadcrumb;
