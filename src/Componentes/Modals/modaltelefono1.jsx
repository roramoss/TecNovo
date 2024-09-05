import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Telefono1() {
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
          Galaxy Z Fold5 Phantom Black 256GB

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/celular1.avif" alt="" /> <br />
            <ul>
              <li> Procesador    Octa-core </li>
              <li>Camara frontal       10.0MP</li>
              <li>Camara trasera       50.0 MP + 12.0 MP + 10.0 MP</li>
              <li>Memoria interna    256 - 512</li>
              <li>Pin de carga       usb Type-C</li>
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

export default Telefono1;