import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Telefono2() {
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
          Galaxy Z Flip5 Cream 256GB
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/celular3.avif" alt="" /> <br />
            <ul>
              <li>Procesador  Octa - core</li>
              <li>Camara Frontal     10.0MP</li>
              <li>Camara Trasera      12.0MP +  12.0MP</li>
              <li>Memoria Interna  256 -  512</li>
           
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

export default Telefono2;