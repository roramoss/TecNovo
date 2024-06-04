
import React from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'
import './registro.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Registro = () => {
  return (


<DefaultLayout>


<section className='secformu'>

  <Container className='contenedorformu'>

  <form className='formulariologin'>
        <h1 className='inicia'>Registro</h1>

        <div className='input-contenedor'>

        <label htmlFor="">Nombre</label>
        <input type="text" />
        <br />

        </div>




        <div className='input-contenedor' >

        <label htmlFor="">Email</label>
        <input type="email" />
        <br />

        </div>


        <div className='input-contenedor' >

        <label htmlFor="">Contraseña</label>
        <input type="password" />
        </div>
        <br />

       



       <a href="http://" className='inicioo'>Iniciar sesion</a>




        </form>
  </Container>




</section>



</DefaultLayout>

   

  )
}

export default Registro