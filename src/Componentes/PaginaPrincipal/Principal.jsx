import React from 'react'
import './principal.css'
import Carruselprincipal from './carruselprincipal'
import Footer from '../Footer/Footer'

import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
const Principal = () => {


  return (
<>



<div>
  hola esto solo se puede ver desde la principal y tenes que estar logueado
</div>


 <section>
<div className='link'>
  <a href="#Moviles"  className="">Moviles</a>
  <a href="#Computadoras" className="">Computadoras</a>
  <a href="#Televisores" className="">Televisores</a>
  <a href="#electrodomesticos" className="" >Electrodomesticos</a>
</div>

</section> 

<section>
< Carruselprincipal/>
</section>

<section className="py-5" id='electrodomesticos' >
      <Container>
        <h2 className="text-center mb-4" >Electrodomesticos</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/heladera2.avif" />
              <Card.Body>
                <Card.Title>
                Heladera Bespoke Side By Side 626L <br />
                $3,457,999.00
               
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/labaropas2.webp" />
              <Card.Body>
                <Card.Title>
                Lavasecarropas 9,5kg con Ecobubble™ WD4000T <br />
                $ 1,556,999.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/heladera3.avif" />
              <Card.Body>
                <Card.Title>
                Heladera freezer superior No Frost inoxidable 382 litros <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/labaropas3.webp" />
              <Card.Body>
                <Card.Title>
                Lavasecarropas 9.5Kg con control IA y Ecobubble White <br />
                $1,300,000.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>




    <section className="py-5" id='Moviles' >
      <Container>
        <h2 className="text-center mb-4" >Moviles</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular1.avif" />
              <Card.Body>
                <Card.Title>
                Galaxy Z Fold5 Phantom Black 256GB <br />
                $857,999.00
               
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular2.avif" />
              <Card.Body>
                <Card.Title>
                Galaxy S21 FE 5G Oliva 128GB<br />
                $ 956,999.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular3.avif" />
              <Card.Body>
                <Card.Title>
                 
                Galaxy Z Flip5 Cream 256GB <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular4.avif" />
              <Card.Body>
                <Card.Title>
                Galaxy Z Fold5 ultra 228GB <br />
                $2,300,000.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    <section className="py-5" id='Televisores' >
      <Container>
        <h2 className="text-center mb-4" >Televisores</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor1.webp" />
              <Card.Body>
                <Card.Title>
                Heladera Bespoke Side By Side 626L <br />
                $3,457,999.00
               
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor2.avif" />
              <Card.Body>
                <Card.Title>
                Lavasecarropas 9,5kg con Ecobubble™ WD4000T <br />
                $ 1,556,999.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor3.avif" />
              <Card.Body>
                <Card.Title>
                Heladera freezer superior No Frost inoxidable 382 litros <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor4.avif" />
              <Card.Body>
                <Card.Title>
                Lavasecarropas 9.5Kg con control IA y Ecobubble White <br />
                $1,300,000.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    <section className="py-5" id='Computadoras' >
      <Container>
        <h2 className="text-center mb-4" >Computadoras</h2>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora1.avif" />
              <Card.Body>
                <Card.Title>
                Galaxy Book3 (15.6",i3,8GB)
                <br />
                $557,999.00
               
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora2.avif" />
              <Card.Body>
                <Card.Title>
                Monitor Gaming 25" FHD 240Hz con panel IPS <br />
                $ 656,999.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora3.webp" />
              <Card.Body>
                <Card.Title>
                Monitor Smart FHD de 32" Apps Wifi BT
                 <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora4.jpg" />
              <Card.Body>
                <Card.Title>
                Monitor 32" UHD 4K M70B <br />
                $900,000.00
                </Card.Title>
                <Link className='link2' >Mas informacion</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>





    <Footer/>


</>

   
  )
}

export default Principal
