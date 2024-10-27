import React from 'react'

import logo from './../../img/logo.png'
import background from './../../img/background.plugin'


const Login = () => {
  return (
    <div className='container'>
        <div className='text-center' style={{backgroundImage: src={background}}}>
            <h1 className=''>Solicitud de Material</h1>
            <img src={logo} style={{width:"8rem"}} alt="1KOMMA5º" />
            <br/>
            <h2>Usuario</h2>
            <br/>
            <input type="email" />
            <br/>
            <h2>Contraseña</h2>
            <br/>
            <input type="password" />
            <br/>
            <button className='btn'>Login</button>
            <br/>
            <h4>Registrate<a href="">Aqui</a></h4>
        </div>

    </div>
  )
}

export default Login