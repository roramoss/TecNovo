import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Heladera2() {
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
          Heladera freezer superior No Frost inoxidable 382 litros
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/heladera2.avif" alt="" /> <br />
         <ul>
          <li> Litraje Total 382 Litros</li>
          <li>Color  inox</li>
          <li>Efeciencia Energetica   A++</li>
          <li>No frost    Digital Inverter Compressor </li>
          
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

export default Heladera2;