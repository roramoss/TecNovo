import React from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'

const Inicio = () => {
  return (


<DefaultLayout>

<form>
        <h1>Login</h1>
        <label htmlFor="">Nombre</label>
        <input type="text" />

        <label htmlFor="">Contraseña</label>
        <input type="password" />

        <button>Iniciar sesion</button>




        </form>



</DefaultLayout>

   

  )
}

export default Inicio
