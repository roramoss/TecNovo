
import React from 'react'
import DefaultLayout from '../../layout/DefaultLayouth'

const Registro = () => {
  return (


<DefaultLayout>

<form>
        <h1>Registro</h1>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" />
        <br />
        <label htmlFor="">Contraseña</label>
        <input type="password" />

        <button>Iniciar sesion</button>




        </form>



</DefaultLayout>

   

  )
}

export default Registro