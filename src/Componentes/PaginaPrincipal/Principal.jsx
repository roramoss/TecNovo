import React from 'react'
import './principal.css'
import Carruselprincipal from './carruselprincipal'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import Electrodomesticos from './electrodomesticos';

const Principal = () => {


  return (
<>


<div>
  hola esto solo se puede ver desde la principal y tenes que estar logueado
</div>
<section>
<div className='link'>
  <a href="" className="">Telefonos</a>
  <a href="" className="">Computadoras</a>
  <a href="" className="">Televisores</a>
  <a href="" className="">Electrodomesticos</a>
</div>

</section>

<section>
< Carruselprincipal/>
</section>
 <section>
  <h1>Electrodomesticos</h1>
  <Electrodomesticos/>
 </section>








</>

   
  )
}

export default Principal
