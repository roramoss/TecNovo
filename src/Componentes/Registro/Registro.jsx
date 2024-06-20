import { useAuth } from '../../auth/authProvider'
import { Navigate } from 'react-router-dom'
import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'
import './registro.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registro = () => {

const [name, setname] = useState("");
const [email, setEmail] = useState("");
const [Password, setPassword] = useState("");

const auth = useAuth();

if(auth.isAuthenticated){
  return <Navigate to="/principal"/>
};




  return (


<DefaultLayout>


<section className='secformu'>

  <Container className='contenedorformu'>

  <form className='formulariologin'>
        <h1 className='inicia'>Registro</h1>

        <div className='input-contenedor'>

        <label htmlFor="">Nombre</label>
        <input type="text" value={name}
        onChange={(e) => setname(e.target.value)}
        />
        <br />

        </div>




        <div className='input-contenedor' >

        <label htmlFor="">Email</label>
        <input type="email"  value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        </div>


        <div className='input-contenedor' >

        <label htmlFor="">Contraseña</label>
        <input type="password" value={Password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <br />

       



       <a href="" className='inicioo'>Iniciar sesion</a>




        </form>
  </Container>




</section>



</DefaultLayout>

   

  )
}

export default Registro