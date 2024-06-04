
// aca vendria estar el navbar que pongo una etiqueta en cata vista y el contenido de cada vista  va adentro de la etiqueta


import React from "react";
import { Link } from "react-router-dom";
// import { Children } from "react";
import './Navbar.css'


interface DefaultLayoutProps{
    children:React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <>
            <header>

                

            <div className="navbar">

                 <a href="http:/">

                 <img
                
                src="src/assets/logo_transparent.png"
                width="90"
                height="90"
                className="d-inline-block align-top"
                alt="React Bootstrap logo" 
                />

                 </a>

                

               
                 
                    
                   
                
                
                  
                
            

      <ul>
        <li><a href="/Login">Iniciar Sesion</a></li>
        <li><a href="/Registro">Registro</a></li>
      
      </ul>
    </div>
               
            </header>

            <main>{children}</main>
        </>
    );
}
{/* <nav>
<ul>
   
    <li><Link to="/Login">Inicio</Link></li>
    <li><Link to="/Registro">Registro</Link></li>
</ul>
</nav> */}