import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BiCollapse, BiColorFill } from 'react-icons/bi';

function Telefono3() {
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
          Galaxy Z Fold5 ultra 228GB
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src="src/assets/celular4.avif" alt="" /> <br />
         <ul>
          <li>Procesador      Octa-Core</li>
          <li>Camara frontal    10.0MP</li>
          <li>Camara trasera     50.0MP + 12.0MP</li>
          <li>Memoria interna     256 -512</li>
          <li>Tamaño de pantalla  192.1mm (7.6" full rectangle) / 188.6mm (7.4" rounded corners)  </li>
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

export default Telefono3;