import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <img src="src/assets/logo_transparent.png" alt="Logo" style={{ maxWidth: '100px' }} />
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div>
              <h5>Contacto</h5>
              <p>Teléfono: 123-456-789</p>
              <p>Email: TecNovo@gmail.com</p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <div>
              <h5>Ubicacion</h5>
              <p>General paz 555 - San Miguel de Tucuman</p>
             
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
