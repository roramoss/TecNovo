import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Compu1() {
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
          Galaxy Book3 (15.6",i3,8GB)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/computadora1.avif" alt="" /> <br />
          <ul>
            <li>Alto: 9.0.2</li>
            <li>Ancho: 14.04</li>
            <li>Color: Gris</li>
            <li>Bluetooth: SI</li>
            <li>Capacidad de disco: 256. HDMI: SI</li>
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

export default Compu1;