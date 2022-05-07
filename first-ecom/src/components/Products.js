import React from 'react';
import { useFetch } from 'react-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	gap: 1.1em;
	padding: 8em 0.5em 0em 0.5em;
	// border: 5px solid red;
`;
const ProductCard = styled.div`
	border: 2px solid white;
	width: 18vw;
`;
const ProductImage = styled.img`
	width: 19vw;
	height: 50%;
	object-fit: cover;
	// border: 1px solid darkgrey;
`;
const ProductDetailsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;
const TitleContainer = styled.div`
	// border: 3px solid orange;
	padding: 1em 0em 0em 0em;
`;
const PriceContainer = styled.div`
	// border: 3px solid yellow;
	font-weight: bold;
	padding: 0.5em 0em 0em 0em;
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
					<Link to={`/products/${product.id}`}>
						<ProductImage src={product.image} alt='product' />
					</Link>
					<ProductDetailsContainer>
						<TitleContainer>{product.title}</TitleContainer>
						<PriceContainer> $ {product.price}</PriceContainer>
					</ProductDetailsContainer>
				</ProductCard>
			))}
		</ProductListContainer>
	);
}

export default Products;
