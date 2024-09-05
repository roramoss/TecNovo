import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Labarropas2() {
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
          Lavasecarropas 9.5Kg con control IA y Ecobubble White
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/labaropas3.webp" alt="" /> <br />

            <ul>
              <li>Lavado Inteligente, control IA</li>
            <li>Conecta tu casa con SmartThings</li>
            <li> Ecobubble</li>
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

export default Labarropas2;