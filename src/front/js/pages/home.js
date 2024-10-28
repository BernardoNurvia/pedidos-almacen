import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import logo from './../../img/logo.png'
import "../../styles/home.css";
import { Button } from "react-bootstrap";
import './../../styles/login.css'

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<h1 className="text-border-white-blur">Solicitud de Material </h1>
				<img src={logo} width= "350rem"  style={{borderRadius: "8px" }} />
				<br/>
				<Button className="mt-3">Iniciar Pedido</Button>
			
		</div>
	);
};
