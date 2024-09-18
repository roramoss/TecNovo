import Nav from "../Navbar1";
import Segunda from "./SegundaSeccion/seccion2"
import Primera from "./PrimeraSeccion/seccion1";
import Tercera from "./Terceraseccion/seccion3";
import Cuarta from "../CuartaSeccion/Cuartaseccion";
import Footer from "../Footer/Footer";
import './primeravista.css'
import DefaultLayout from "../../layout/DefaultLayouth";







function Primeravista() {
  

    return (
      <>

      



      <DefaultLayout>


        <Primera/>
        
        <Segunda/>
        <Tercera/>
        <br /><br /><br />
        <Cuarta/>
        <br /><br /><br />
         <Footer/>

      </DefaultLayout>
      
  
  
      
      </>
    )
  }
  
  export default Primeravista;
  