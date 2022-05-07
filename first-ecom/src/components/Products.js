import React from 'react';
import { useFetch } from 'react-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	border: 5px solid red;
`;

const ProductCard = styled.div`
	border: 3px solid green;
`;

function Products() {
	const { data, error } = useFetch('https://fakestoreapi.com/products', {
		headers: { accept: 'application/json' },
		method: 'GET',
	});

	if (error) return error;

	console.log(data);

	if (!data) return null;

	return (
		<ProductListContainer>
			{data.map((product) => (
				<ProductCard>
					<div className='title'>{product.title}</div>
					<Link to={`/products/${product.id}`}>
						<img src={product.image} alt='product' />
						<div className='price'> $ {product.price}</div>
					</Link>
				</ProductCard>
			))}
		</ProductListContainer>
	);
}

export default Products;
