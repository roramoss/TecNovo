import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Primeravista from './Componentes/primeravista/Primeravista.jsx';
import Inicio from './Componentes/Inicio/inicio.jsx';
import Registro from './Componentes/Registro/Registro.jsx';
import Principal from './Componentes/PaginaPrincipal/Principal.jsx';
import ProteccionRoute from './Route/Proteccion.jsx';
import { AuthProvider } from './auth/authProvider.tsx';
import Carrusel2 from './Componentes/PaginaPrincipal/carrusel2.jsx';
import Primera from './Componentes/primeravista/PrimeraSeccion/seccion1.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Primeravista/>,
  },
  {
    path : "/Login",
    element : <Inicio/>,
  },{
    path : "/promociones",
  element : <Carrusel2/>
  },
  {
    path: "/primeraa",
    element: <Primera/>
  },
  
  {
    path :"/Registro",
    element: <Registro/>,
  },

  { 
    path :"/",
    element : <ProteccionRoute/>,
    children :[ {

      path : "/Principal",
      element : <Principal/>
    },
     
    ],
      

    },
  
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <React.StrictMode>

    <AuthProvider>
    <RouterProvider router={router}/>

    </AuthProvider>
   
 
  </React.StrictMode>
)

