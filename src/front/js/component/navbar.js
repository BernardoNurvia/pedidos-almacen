import React from "react";
import { Link } from "react-router-dom";

import logo from './../../img/logo.png'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light" style={{backgroundColor:"rgb(93, 251, 231)"}}>
			<div className="container">
				<Link to="/">
				<img src={logo} style={{width:"5rem", borderRadius:"8px"}} alt="1KOMMA5º" />
					{/* <span className="navbar-brand mb-0 h1">1KOMMA5º</span> */}
				</Link>
				<h1>hola Usuario</h1>
				<div className="ml-auto">
					
					<Link to="/dashboard-consumer">
						<button className="btn btn-primary ">Dashboard</button>
					</Link>
					<Link to="/login">
						<button className="btn btn-primary">Sing in</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
