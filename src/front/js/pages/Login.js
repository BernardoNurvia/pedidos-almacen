import React from 'react'

import logo from './../../img/logo.png'
import background from './../../img/background.png'


const Login = () => {
  return (
    <div className='container p-3'>
        <div className='text-center m-auto p-3'style={{width:"20rem", backgroundImage:"url(https://res.cloudinary.com/dikso8bsk/image/upload/v1730039919/Iniciar_qnoeta.png)",    backgroundSize: 'cover',
    backgroundPosition: 'center', borderRadius:"5px"}} >
            <h1 className='' style={{textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)'}}>Solicitud de Material</h1>
            <img src={logo} style={{width:"10rem", borderRadius:"8px"}} alt="1KOMMA5º" />
            <br/>
            <h2 className='mt-1' >Usuario</h2>
           
            <input className="form-control" placeholder='Tu email aqui' type="email" />
            
            <h2 className='mt-1'>Contraseña</h2>
            
            <input className="form-control" placeholder="contraseña" type="password" />
            <br/>
            <button className='btn btn-primary mt-1'>Login</button>
            <br/>
            <h5 className='mt-3'>Registrate<a href="">Aqui</a></h5>
        </div>

    </div>
  )
}

export default Login