import { Link } from "react-router-dom";
import Primeravista from "./primeravista/Primeravista"

function Nav() {
  return (
    <>
    
    <div className="navbar">

    
     <img
              src="src/assets/logo_transparent.png"
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
           
             
            />
      <ul>
        <li><a href="/Login">Iniciar Sesion</a></li>
        <li><a href="/Registro">Registro</a></li>
      
      </ul>
    
    
    </div>
        
     
    </>
  );
}

export default Nav;