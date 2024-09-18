import { useState } from 'react';

import ProductList from './ProductList'
import CarritoHeader from './Header';
import Primera from '../../primeravista/PrimeraSeccion/seccion1';



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

<Primera/>
<br /><br />
			<h1 className='produ1'>Tienda online</h1>
			
			<br /><br />


			
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