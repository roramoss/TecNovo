import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'
import './inicio.css'
import { useAuth } from '../../auth/authProvider'
import { Navigate } from 'react-router-dom'

import { Container } from 'react-bootstrap'





const Inicio = () => {

const [username, setUsername] = useState ("");
const [password, setPassword] = useState ("");

const auth = useAuth();

if(auth.isAuthenticated){
  return <Navigate to="/principal"/>
};



  return (


<DefaultLayout>


<section className='secformu'>


  
   <Container className='contenedorformu'> 

<form >

        <h1 className='inicia'>Iniciar sesion</h1>



        <div className='input-contenedor'>
        <label htmlFor="">Nombre de Usuario</label>
        <input type="text"  value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        </div>



        <div className=' input-contenedor'>

        <label htmlFor="">Contraseña</label>
        <input type="password"  value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        </div>
        <br />
       

       <a href="http://" className='inicioo'>Inicio</a>

      
        </form>



   </Container> 


</section>




</DefaultLayout>

   

  )
}

export default Inicio
