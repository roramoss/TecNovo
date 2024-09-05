import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Tablet() {
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
          Galaxy Tab S9 con Book cover Keyboard (Wi-Fi) Graphite 128GB
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/celular2.avif" alt="" /> <br />
          <ul>
            <li> Procesador Octa-Core</li>
            <li>Tamaño de pantalla      11.0" </li>
            <li>Camara prontal 12.0 MP</li>
            <li>Camara Trasera       13.0  MP</li>
            <li>Memoria interna     128 -  258</li>
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

export default Tablet;