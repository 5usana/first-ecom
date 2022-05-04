import React from 'react';
import { useState } from 'react';

function DisplayImage() {
	const [productList, setProductList] = useState([]);
	// let API_KEY = '62c9fe58';

	async function getAllProducts() {
		const url = `https://fakestoreapi.com/products`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		// if (data.Search) {
		// 	setProductList(data.Search);
		// }
	}

	getAllProducts('');

	// useEffect(() => {
	//         getAllProducts(searchMovie);
	//     }, [searchMovie]);
	return (
		<div>
			{' '}
			Products display here .Display Image - Title - $ - Grid format
			{productList}
		</div>
	);
}

export default DisplayImage;
