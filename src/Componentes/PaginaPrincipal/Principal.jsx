import React from 'react'
import './principal.css'

import Footer from '../Footer/Footer'

import Carrusel2 from './carrusel2'
import Carrito from './Carrito/carrito.jsx'

import Cuarta from '../CuartaSeccion/Cuartaseccion.jsx'
import NavigationLinks from './menunaveg.jsx'
import Carruselprincipal from './carruselprincipal.jsx'
import Segunda from '../primeravista/SegundaSeccion/seccion2.jsx'
import Primera from '../primeravista/PrimeraSeccion/seccion1.jsx'


const Principal = () => {

 


  return (

<>


<section id='tienda-online'>
<Carrito/>
</section>
<br /><br /><br />
<section id='promociones'>
<Segunda/>
<br />
<section className='tarjetas'></section>
<Primera/>
</section>
<br /><br /><br /> <br /><br /><br /><br />
<section id='contactanos'>
<Cuarta/>
</section>
 <br /><br /><br /><br /><br /><br />

<Footer/>


</>

   
  )
}

export default Principal
