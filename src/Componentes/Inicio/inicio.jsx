import React from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'
import './inicio.css'
import Nav from '../Navbar1'
import { Container } from 'react-bootstrap'





const Inicio = () => {
  return (


<DefaultLayout>


<section className='secformu'>


  
   <Container className='contenedorformu'> 

<form >

        <h1 className='inicia'>Iniciar sesion</h1>



        <div className='input-contenedor'>
        <label htmlFor="">Nombre</label>
        <input type="text" />

        </div>



        <div className=' input-contenedor'>

        <label htmlFor="">Contraseña</label>
        <input type="password" />

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
