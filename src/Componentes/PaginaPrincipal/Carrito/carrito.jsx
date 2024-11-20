import { useState } from 'react';

import ProductList from './ProductList'
import CarritoHeader from './Header';
import Primera from '../../primeravista/PrimeraSeccion/seccion1';
import Carruselprincipal from '../carruselprincipal';
import Carrusel2 from '../carrusel2';
import NavigationLinks from '../menunaveg';


function Carrito() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
		

		<CarritoHeader
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<NavigationLinks/>
 

<h1 className='produ3'>Tienda online</h1>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>

		
			
		</>
	);
}

export default Carrito;