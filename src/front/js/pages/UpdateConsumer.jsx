import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import logo from './../../img/logo.png'
import background from './../../img/background.png'
import './../../styles/login.css'


const UpdateConsumer = () => {
    return (
        <div className="text-center">


            <div className='container p-3'>
                <div className='text-center m-auto p-3' style={{
                    width: "20rem", backgroundImage: "url(https://res.cloudinary.com/dikso8bsk/image/upload/v1730039919/Iniciar_qnoeta.png)", backgroundSize: 'cover',
                    backgroundPosition: 'center', borderRadius: "5px"
                }} >
                    <h1 className='text-border-white-blur' >Actualiza tu datos</h1>
                    <img src={logo} style={{ width: "10rem", borderRadius: "8px" }} alt="1KOMMA5º" />
                    <br />
                    <h2 className='mt-3 text-border-white-blur' htmlFor='name'  >Nombre y Apellido</h2>

                    <input id='name' className="form-control text-center" placeholder='Nombre y Apellido' type="email" />

                    <h2 className='mt-3 text-border-white-blur' htmlFor='email'  >Email</h2>

                    <input id='email' className="form-control text-center" placeholder='Tu email aqui!' type="email" />
                    <h2 className='mt-3 text-border-white-blur' htmlFor='confirmEmail'  >Confirma el Email</h2>

                    <input id='confirmEmail' className="form-control text-center" placeholder='Repite tu email!' type="email" />

                    <h2 className='mt-3 text-border-white-blur' htmlFor='password'>Contraseña</h2>

                    <input id='password' className="form-control text-center" placeholder="contraseña" type="password" />

                    <h2 className='mt-3 text-border-white-blur' htmlFor='repitPassword' >Repite la contraseña</h2>

                    <input id='repitPassword' className="form-control text-center" placeholder="Repite la contraseña" type="password" />
                    <br />
                    <button className='btn btn-primary mt-1'>Actualizar</button>
                    <br />
                    <h5 className='mt-3 text-border-white-blur'>volver <Link to='/dashboar-consumer'>aqui</Link></h5>


                </div>
            </div>
        </div>

    )
}

export default UpdateConsumer