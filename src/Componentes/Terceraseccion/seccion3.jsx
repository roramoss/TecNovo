import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';


function  Tercera () {

    return (

        <>

        <div className='produ1'>
        <h1 >Productos Destacados</h1>
        </div>
        
        
        <div className='produ2'>


        <CardGroup>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados1.png" />
        <Card.Body>
          <Card.Title>43" UHD 4K Smart TV AU7000</Card.Title>
          <Card.Text>
           
                          <ul>
                            <li>Expandi tu experiencia Smart 4K</li>
                            <li>Color afinado para una imagen vibrante y realista</li>
                            <li>Potente Procesador Crystal 4K</li>
              
                          </ul>
         
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados2.png" />
        <Card.Body>
          <Card.Title>Galaxy S23 ULTRA Cream 256GB</Card.Title>
          <Card.Text>
          <ul>
        <li>Fotografia y gaming ultrarapidos</li>
        <li>Diseñado para vos y el planeta</li>
        <li>S Pen Incorporado compatible con mas aplicaciones</li>
        <li> Cuidemos el planeta: No incluye cargador</li>

      </ul>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados3.png" />
        <Card.Body>
          <Card.Title>Galaxy S23 FE Cream 128GB</Card.Title>
          <Card.Text>
           <ul>
            <li>Camara frontal 10.0MP</li>
            <li>Camara Trasera 50.0MP + 12.0MP + 8.0MP</li>
            <li>Memoria interna 128-256</li>
            <li>Procesador Octa-Core</li>
           </ul>
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
    <br />
    <div className='produ1'>
        <h1 >Lo mas vendido</h1>
        </div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados4.png" />
        <Card.Body>
          <Card.Title>55" Neo QLED 4K QN85C</Card.Title>
          <Card.Text>
            <ul>
              <li>Procesador Neutral Quantum 4K</li>
              <li> Diseño Neo Slim</li>
              <li>Tamaño 55"</li>
              <li>Resolucion 3,840 x 2,160</li>
            </ul>
           
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados5.png" />
        <Card.Body>
          <Card.Title>Galaxy Z Flip4 Blue 256GB</Card.Title>
          <Card.Text>
            <ul>
              <li>Procesador Octa-Core</li>
              <li>Camara Frontal 10.0MP</li>
              <li>Carama trasera 12.0 MP + 12.0MP</li>
              <li>Memoria Interna 128-256</li>
            </ul>
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados6.png" />
        <Card.Body>
          <Card.Title> Galaxy A14 Black</Card.Title>
          <Card.Text>
            <ul>
              <li>Procesador 2GHz</li>
              <li>Camara Frontal 13.0MP</li>
              <li>Camara Trasera 50.0MP + 5.0 MP + 2.0 MP</li>
              <li>Memoria Interna 128</li>
            </ul>
           
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

        </div>





        
        
        </>
    )
}
export default Tercera;



