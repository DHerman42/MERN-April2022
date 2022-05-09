import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import Main from "./views/Main";
import ProductDetail from "./components/ProductDetail";

function App() {
	return (
		<BrowserRouter>
			<Container>
				<Routes>
					<Route element={<Main />} path="/" default />
					<Route element={<ProductDetail />} path="/:id" />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}

export default App;
