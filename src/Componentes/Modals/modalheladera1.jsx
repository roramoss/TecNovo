import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Heladera1() {
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
          Heladera Bespoke Side By Side 626L
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/heladera2.avif" alt="" /> <br />
            <ul>
              <li>Estilo único BESPOKE</li>
              <li>Tecnología SpaceMax™</li>
              <li>Ahorro de energía</li>
              <li>(An x Al x Prof) 912 x 1782 x 732 mm</li>
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

export default Heladera1;