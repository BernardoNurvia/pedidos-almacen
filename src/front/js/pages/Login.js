import React from 'react'

import logo from './../../img/logo.png'



const Login = () => {
  return (
    <div className='container'>
        <div className='text-center m-auto'style={{width:"20rem", backgroundColor:"purple", borderRadius:"5px"}} >
            <h1 className=''>Solicitud de Material</h1>
            <img src={logo} style={{width:"10rem"}} alt="1KOMMA5º" />
            <br/>
            <h2 className='mt-1'>Usuario</h2>
           
            <input type="email" />
            
            <h2 className='mt-1'>Contraseña</h2>
            
            <input type="password" />
            <br/>
            <button className='btn btn-success mt-1'>Login</button>
            <br/>
            <h5 className='mt-1'>Registrate<a href="">Aqui</a></h5>
        </div>

    </div>
  )
}

export default Login