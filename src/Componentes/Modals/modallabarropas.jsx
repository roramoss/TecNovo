import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Modallabarropas() {
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
          Lavasecarropas 9,5kg con Ecobubble™
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/labaropas2.webp" alt="" /> <br />
            <ul>
              <li>
              AirWash: desodorizá tu ropa con aire en sólo 15'
              </li>
              <li>
              Prelavado burbujas: remoción especial manchas difíciles
              </li>
              <li>
              Digital Inverter: ahorro energético con durabilidad
              </li>
              <li>
              Lavado y secado rápido: 59'
              </li>
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

export default Modallabarropas;