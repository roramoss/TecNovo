import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NavigationLinks = () => {
  return (
    <Container className="containermenu">
      <Row className="text-center">
       
        <Col>
          <a href="#promociones" className='menu' >Promociones</a>
        </Col>
        <Col>
          <a href="#tienda-online"  className='menu'>Tienda Online</a>
        </Col>
        <Col>
          <a href="#contactanos"className='menu' >Contáctanos</a>
        </Col>
      </Row>
    </Container>
  );
};

export default NavigationLinks;
