import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Monitor2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <button className='booton' onClick={handleShow}>
      Mas informacion
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          Monitor Gaming 25" FHD 240Hz con panel IPS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/computadora2.avif" alt="" /> <br />
            <ul>
              <li>Curvatura de pantalla  Flat</li>
              <li>Relación de aspecto  16:9</li>
              <li>Brillo (Típico) 300 cd/m</li>
              <li>Relación de contraste estático 3000:1</li>
              <li>Resolución 3,840 x 2,160</li>
              <li>Tiempo de respuesta 4ms(GTG)</li>
            </ul>
          

        </Modal.Body>
        <Modal.Footer>
       
          <button  onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
        
      </Modal>
      
    </>
  );
}

export default Monitor2;