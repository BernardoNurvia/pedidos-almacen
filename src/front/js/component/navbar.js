import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-info" style={{opacity:0.5}}>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">1KOMMA5º</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
