import React from 'react';
import { useFetch } from 'react-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cart from '../images/cart-arrow-down-solid.svg';

const ProductListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1.1em;
	padding: 8em 0.5em 0em 0.5em;
`;
const ProductCard = styled.div`
	border: 2px solid white;
	width: 18vw;
`;
const ProductImage = styled.img`
	width: 19vw;
	height: 50%;
	object-fit: cover;
`;
const Test = styled.div`
	display: flex-end;
	align-items: flex-end;
	align-content: end;
`;
const ProductDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-self: flex-end;
	align-items: flex-end;
	justify-content: space-between;
	font-size: 0.9rem;
	margin-top: 10px;
	padding: 0.2em 0em;
`;
const TitleContainer = styled.div`
	padding: 1em 0em 0em 0em;
`;
const PriceContainer = styled.div`
	font-weight: bold;
	padding: 0.5em 0em 0em 0em;
	align-self: end;
`;
const CartIcon = styled.img`
	width: 20px;
	align-self: end;
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
					<Test>
						<TitleContainer>{product.title}</TitleContainer>
						<ProductDetailsContainer>
							<PriceContainer> $ {product.price}</PriceContainer>
							<Link to={`/cart`}>
								<CartIcon src={cart} alt='cart' />
							</Link>
						</ProductDetailsContainer>
					</Test>
				</ProductCard>
			))}
		</ProductListContainer>
	);
}

export default Products;
