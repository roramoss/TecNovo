import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Tarjeta1(
    

) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="src/assets/heladera2.avif" />
      <Card.Body>
        <Card.Title>Heladera Bespoke Side By Side 626L
        </Card.Title>
        <Card.Text>
          $3.000.000
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
            <h6>Mismo precio en 3 cuotas sin interes</h6>
        </ListGroup.Item>
        <ListGroup.Item>Con VISA hasta 12 cuotas sin interes</ListGroup.Item>
        <ListGroup.Item> Llega gratis el lunes</ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta1;