import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreatorProfile from './components/CreatorProfile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}></Route>
				<Route path='/CreatorProfile' element={<CreatorProfile />} />
				<Route path='/Products' element={<Products />} />
				<Route path='/Products/:id' element={<ProductDetails />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Checkout' element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
