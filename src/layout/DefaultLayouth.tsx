import React from "react";
import { Link } from "react-router-dom";
// import { Children } from "react";

interface DefaultLayoutProps{
    children:React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                       
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Registro">Registro</Link></li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
