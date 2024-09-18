import { CardGroup, Card } from "react-bootstrap";





function  Tercera () {

    return (

        <>
        <div className='produ1' >
        <h1 >Productos Destacados</h1>
        </div>
      


        <CardGroup>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados1.png" />
        <Card.Body>
          <Card.Title>43" UHD 4K Smart TV AU7000</Card.Title>
          <Card.Text>
           
                          
                            -Expandi tu experiencia Smart 4K <br />
                            -Color afinado para una imagen vibrante y realista <br />
                            -Potente Procesador Crystal 4K
              
                          
         
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados2.png" />
        <Card.Body>
          <Card.Title>Galaxy S23 ULTRA Cream 256GB</Card.Title>
          <Card.Text>
          
       -Fotografia y gaming ultrarapidos
        -Diseñado para vos y el planeta <br />
        -S Pen Incorporado compatible con mas aplicaciones <br />
         -Cuidemos el planeta: No incluye cargador

      
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados3.png" />
        <Card.Body>
          <Card.Title>Galaxy S23 FE Cream 128GB</Card.Title>
          <Card.Text>
           
            -Camara frontal 10.0MP <br />
            -Camara Trasera 50.0MP + 12.0MP + 8.0MP <br />
            -Memoria interna 128-256
            Procesador Octa-Core
           
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>

    <div className='produ1'>
        <h1 >Lo mas vendido</h1>
        </div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados4.png" />
        <Card.Body>
          <Card.Title>55" Neo QLED 4K QN85C</Card.Title>
          <Card.Text>
            
             -Procesador Neutral Quantum 4K <br />
               -Diseño Neo Slim <br />
              -Tamaño 55" <br />
              -Resolucion 3,840 x 2,160
            
           
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados5.png" />
        <Card.Body>
          <Card.Title>Galaxy Z Flip4 Blue 256GB</Card.Title>
          <Card.Text>
            
              -Procesador Octa-Core <br />
              -Camara Frontal 10.0MP <br />
              -Carama trasera 12.0 MP + 12.0MP <br />
              -Memoria Interna 128-256
            
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="src/assets/destacados6.png" />
        <Card.Body>
          <Card.Title> Galaxy A14 Black</Card.Title>
          <Card.Text>
            
              -Procesador 2GHz <br />
              -Camara Frontal 13.0MP <br />
              -Camara Trasera 50.0MP + 5.0 MP + 2.0 MP <br />
              -Memoria Interna 128
            
           
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

        </>
    )
}
export default Tercera;



