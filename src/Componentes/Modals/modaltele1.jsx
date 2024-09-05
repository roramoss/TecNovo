import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Tele1() {
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
          55" QLED 4K Q60C

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/televisor1.webp" alt="" /> <br />
          <ul>
            <li>Procesador    Neural Quantum 4k</li>
            <li>Diseño      Air Slim</li>
            <li>Tamaño    55"</li>
            <li>Bluetooth       si</li>
            <li> Resolucion    3,840 x 2,160   </li>
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

export default Tele1;