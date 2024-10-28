import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo from './../../img/logo.png'
import background from './../../img/background.png'
import './../../styles/login.css'


const Login = () => {
  

  return (
    <div className='container p-3'>
        <div className='text-center m-auto p-3'style={{width:"20rem", backgroundImage:"url(https://res.cloudinary.com/dikso8bsk/image/upload/v1730039919/Iniciar_qnoeta.png)",    backgroundSize: 'cover',
    backgroundPosition: 'center', borderRadius:"5px"}} >
            <h1 className='text-border-white-blur' >Inicia sesion</h1>
            <img src={logo} style={{width:"10rem", borderRadius:"8px"}} alt="1KOMMA5º" />
            <br/>
            <h2 className='mt-3 text-border-white-blur'  >Usuario</h2>
           
            <input className="form-control text-center" placeholder='Tu email aqui!' type="email" />
            
            <h2 className='mt32 text-border-white-blur'>Contraseña</h2>
            
            <input className="form-control text-center" placeholder="contraseña" type="password" />
            <h4 className='mt-3 text-border-white-blur'>Olvidaste tu <a href=''>contraseña?</a></h4>
            <br/>
            <button className='btn btn-primary mt-1'>Login</button>
            <br/>
            <h5 className='mt-3 text-border-white-blur'>Registrate <Link to='/registro'>aqui</Link></h5>
        </div>

    </div>
  )
}

export default Login