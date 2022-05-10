import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'react-bootstrap';

import Main from "./views/Main";
import ProductDetail from "./components/ProductDetail";
import ProductUpdate from "./components/ProductUpdate";

function App() {
	const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
	}

	return (
		<BrowserRouter>
			<Container>
				<Routes>
					<Route element={<Main products={products} setProducts={setProducts} removeFromDom={removeFromDom} />} path="/" default />
					<Route element={<ProductDetail removeFromDom={removeFromDom} />} path="/:id" />
					<Route element={<ProductUpdate />} path="/edit/:id" />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
