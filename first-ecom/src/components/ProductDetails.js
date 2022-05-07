import React from 'react';
import styled from 'styled-components';
import { useFetch } from 'react-async';
import { useParams } from 'react-router';
import NavBar from './NavBar';

const DetailsContainer = styled.div`
	padding: 3em 1em;
	align-self: center;
	border: 10px solid white;
`;
const DetailsCard = styled.div`
	border-top: 2px solid silver;
	border-bottom: 2px solid silver;
	padding: 1em 1em;
`;
const ProductImage = styled.img`
	width: 40vw;
	height: 50%;
	object-fit: cover;
	padding: 2em 1em;
	// border: 1px solid darkgrey;
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
				<DetailsCard>
					<h1>{data.title}</h1>
					<ProductImage src={data.image} alt='product' />
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
				</DetailsCard>
			</DetailsContainer>
		</>
	);
}

export default ProductDetails;
