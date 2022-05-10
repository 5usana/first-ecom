import React from 'react';
import styled from 'styled-components';
import { useFetch } from 'react-async';
import { useParams } from 'react-router';
import NavBar from './NavBar';
import MyButton from '../styles/MyButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cart from '../images/cart-arrow-down-solid.svg';
// import { cart-arrow-down } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={cart - arrow - down} />;

const HeaderOne = styled.h1`
	padding: 1em;
	margin: 2em 0em;
	border-top: 3px solid silver;
	border-bottom: 3px solid silver;
`;
const DetailsContainer = styled.div`
	padding: 3em 1em;
	align-self: center;
	border-bottom: 3em solid silver;
`;
const ProductImage = styled.img`
	width: 40vw;
	height: 50%;
	object-fit: cover;
	padding: 2em 1em;
`;
const ProductCard = styled.div`
	border-bottom: 2px solid silver;
	padding: 1em 1em;
`;
const DetailsCard = styled.div`
	background-color: #708f7c;
	padding: 3em 1em;
	color: white;
	font-size: 1.8vw;
	padding: 1em 1em;
`;
const CartIcon = styled.img`
	width: 40px;
	margin: 0 auto;
	margin-bottom: 4px;
	text-align: center;
`;

function ProductDetails() {
	const { id } = useParams();

	const { data, error } = useFetch(`https://fakestoreapi.com/products/${id}`, {
		headers: { accept: 'application/json' },
		method: 'GET',
	});

	if (error) return error;

	if (!data) return null;

	return (
		<>
			<NavBar />
			<DetailsContainer>
				<ProductCard>
					<HeaderOne>{data.title}</HeaderOne>
					<ProductImage src={data.image} alt='product' />
					<DetailsCard>
						{/* <FontAwesomeIcon icon='fa-solid fa-cart-arrow-down' /> */}
						<div>
							{' '}
							<h5>
								{' '}
								<h3>Category:</h3> {data.category}{' '}
							</h5>
						</div>{' '}
						<div>
							{' '}
							<h5>
								{' '}
								<h3>Description:</h3> {data.description}{' '}
							</h5>
						</div>{' '}
						<div>
							{' '}
							<h3> $ {data.price} </h3>{' '}
						</div>{' '}
						<MyButton primary></MyButton>
						<MyButton normal></MyButton>
						{/* <FontAwesomeIcon icon='fa-solid fa-cart-arrow-down' /> */}
						<CartIcon src={cart} alt='cart' />
					</DetailsCard>
				</ProductCard>
			</DetailsContainer>
		</>
	);
}

export default ProductDetails;
