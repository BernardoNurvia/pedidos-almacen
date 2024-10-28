import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import logo from './../../img/logo.png'
import background from './../../img/background.png'
import './../../styles/login.css'


const Registro = () => {
    return (
        <div className='container p-3'>
            <div className='text-center m-auto p-3' style={{
                width: "20rem", backgroundImage: "url(https://res.cloudinary.com/dikso8bsk/image/upload/v1730039919/Iniciar_qnoeta.png)", backgroundSize: 'cover',
                backgroundPosition: 'center', borderRadius: "5px"
            }} >
                <h1 className='text-border-white-blur' >Registro de usuario</h1>
                <img src={logo} style={{ width: "10rem", borderRadius: "8px" }} alt="1KOMMA5º" />
                <br />
                <h2 className='mt-3 text-border-white-blur'  >Usuario</h2>

                <input className="form-control text-center" placeholder='Tu email aqui!' type="email" />

                <h2 className='mt-3 text-border-white-blur'>Contraseña</h2>

                <input className="form-control text-center" placeholder="contraseña" type="password" />
                
                <h2 className='mt-3 text-border-white-blur'>Repite la contraseña</h2>

                <input className="form-control text-center" placeholder="contraseña" type="password" />
                <br />
                <button className='btn btn-primary mt-1'>Sing Up</button>
                <br />
                <h5 className='mt-3 text-border-white-blur'>Inicia sesion <Link to='/login'>aqui</Link></h5>
            </div>

        </div>
    )
}
export default Registro