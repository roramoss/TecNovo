import React from 'react'
import './principal.css'
import Carruselprincipal from './carruselprincipal'
import Footer from '../Footer/Footer'
import Modallabarropas from '../Modals/modallabarropas'
import Heladera2 from '../Modals/modalheladera2'
import Labarropas2 from '../Modals/modallabarropas2'
import Telefono1 from '../Modals/modaltelefono1'
import Heladera1 from '../Modals/modalheladera1'
import Telefono2 from '../Modals/modaltelefono2'
import Tablet from '../Modals/modaltable'
import Telefono3 from '../Modals/modaltelefono3'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
import Probando11 from '../ModalCompra/CarritoCompra1'
import CustomModal from '../Modals/modal';
import Tele1 from '../Modals/modaltele1'
import Tele2 from '../Modals/modaltele2'
import Tele3 from '../Modals/modaltele3'
import Tele4 from '../Modals/modaltele4'
import Compu1 from '../Modals/modalnotb'
import Monitor2 from '../Modals/modalmonitor2'
import Compu3 from '../Modals/motalmonitos'
import Nav from '../Navbar1'
import Carrusel2 from './carrusel2'
const Principal = () => {

 


  return (
<>


<Nav/>


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

                  <Heladera1/>
                Heladera Bespoke Side By Side 626L <br />
                $3,000,000.00
               
                </Card.Title>
                <Card.Footer>
                  
                  <Probando11/>
                 
                
   
                </Card.Footer>
                
                
              </Card.Body>
            

            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/labaropas2.webp" />
              <Card.Body>
                <Card.Title>
                  <Modallabarropas/>

                Lavasecarropas 9,5kg con Ecobubble™ WD4000T <br />
                $ 1,556,999.00
                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/heladera3.avif" />
              <Card.Body>
                <Card.Title>

                  <Heladera2/>
                  
                Heladera freezer superior No Frost inoxidable 382 litros <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/labaropas3.webp" />
              <Card.Body>
                <Card.Title>
                  <Labarropas2/>
                Lavasecarropas 9.5Kg con control IA y Ecobubble White <br />
                $1,300,000.00
                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
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
                  <Telefono1/>
                Galaxy Z Fold5 Phantom Black 256GB <br />
                $857,999.00
               
                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular2.avif" />
              <Card.Body>
                <Card.Title>
                  <Tablet/>
                  Galaxy Tab S9 con Book cover Keyboard (Wi-Fi) Graphite 128GB <br />
                $ 2,000,000.00
                </Card.Title>
                <Link className='link2' >Comprar Ahora</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular3.avif" />
              <Card.Body>
                <Card.Title>
                  <Telefono2/>
                 
                Galaxy Z Flip5 Cream 256GB <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/celular4.avif" />
              <Card.Body>
                <Card.Title>
                  <Telefono3/>
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
                  <Tele1/>
                  55" QLED 4K Q60C
                  <br />
                $1,000,000.00
               
                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor2.avif" />
              <Card.Body>
                <Card.Title>
                  <Tele2/>
                  98'' QLED 4K Q80C Smart TV <br />
                $ 2,000,000.00
                </Card.Title>
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor3.avif" />
              <Card.Body>
                <Card.Title>
                  <Tele3/>
                  77" OLED 4K S90C <br />
                $ 1,000,000.00


                </Card.Title>
                <Link className='link2' >Comprar Ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/televisor4.avif" />
              <Card.Body>
                <Card.Title>
                  <Tele4/>
                  75" The Frame Art Mode 4K Smart TV Serie B Marco Blanco <br />
                $6,300,000.00
                </Card.Title>
                <Link className='link2' >Comprar Ahora</Link>
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
                  <Compu1/>
                Galaxy Book3 (15.6",i3,8GB)
                <br />
                $557,999.00
               
                </Card.Title>
                <Link className='link2' >Comprar Ahora</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora2.avif" />
              <Card.Body>
                <Card.Title>
                  <Monitor2/>
                Monitor Gaming 25" FHD 240Hz con panel IPS <br />
                $ 656,999.00
                </Card.Title>
                
                <Link className='link2' >Comprar ahora</Link>
              </Card.Body>
              
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src="src/assets/computadora3.webp" />
              <Card.Body>
                <Card.Title>
                  <Compu3/>
                Monitor Smart FHD de 32" Apps Wifi BT
                 <br />
                $ 1,592,999.00


                </Card.Title>
                <Link className='link2' >Comprar Ahora</Link>
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

                <CustomModal/>
                <Link className='link2' >Comprar ahora</Link>
                

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    <section>
      <Carrusel2/>
    </section>





    <Footer/>


</>

   
  )
}

export default Principal
