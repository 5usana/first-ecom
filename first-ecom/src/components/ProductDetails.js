import React, { useContext } from 'react';
import styled from 'styled-components';
import { useFetch } from 'react-async';
import { useParams, useNavigate } from 'react-router';
import NavBar from './NavBar';
import MyButton from '../styles/MyButton';
import carticon from '../images/cart-arrow-down-solid.svg';
import { CartContext } from '../contexts/CartContext';
import NumericInput from 'react-numeric-input';
import { Link } from 'react-router-dom';

const DetailsCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0em 1em;
	// border-bottom: 1em solid silver;
`;
const HomeLinkContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 6.2em 1em 0em 0em;
	font-size: 1rem;
	.nav-tag {
		color: black;
		font-weight: 350;
		text-decoration: none;
	}
`;
const DetailsCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;
const HeaderOne = styled.h1`
	padding: 0.5em 1em 0.5em 1em;
	margin: 2em 0em;
	border-top: 3px solid silver;
	border-bottom: 3px solid silver;
`;
const DetailsContainer = styled.div`
	background-color: #708f7c;
	width: 60vw;
	padding: 3em 1em;
	color: white;
	font-size: 1.2em;
	padding: 1em 1em;
`;
const ProductImage = styled.img`
	width: 25vw;
	height: 50%;
`;
const HeaderThree = styled.h3`
	border-bottom: 3px solid white;
	padding: 0em 0em 0em 0em;
	font-size: 1.5em;
`;
const HeaderFour = styled.h4`
	font-size: 1em;
`;
const CornerDetails = styled.div`
	display: flex;
	border-top: 3px solid white;
`;
const CornerDetailsText = styled.div`
	display: flex;
	display: row;
	justify-content: space-around;
	padding: 0.5em 0em 0em 0em;
	width: 60vw;

	// border: 4px solid orange;
`;
const ButtonContainer = styled.div`
	// border: 2px solid blue;
	// padding: 0em 0em 0em 35em;
`;

// const InputContainer = styled.div`
// 	display: flex;
// 	align-items: last baseline;
// 	flex-direction: row;
// 	width: 35vw;
// 	justify-content: space-around;
// 	// border: 2px solid purple;
// 	// padding: 0em 0em 0em 9em;
// `;
const CartIcon = styled.img`
	width: 25px;
	// padding: 0.2em 0.2em 0em 0.1em;
`;

function ProductDetails() {
	let quantity = 1;
	const navigate = useNavigate();
	const { setCart, cart } = useContext(CartContext);

	// const id = 1
	const addToCart = (product) => {
		// if product already in the cart, update quantity
		const existingProductIndex = cart.findIndex((p) => p.id === product.id);
		if (existingProductIndex !== -1) {
			const updatedCart = cart.map((p) => {
				if (p.id === product.id) {
					p.quantity += quantity;
				}
				return p;
			});
			setCart(updatedCart);
		} else {
			const productWithQuanity = { ...product, quantity };
			setCart([...cart, productWithQuanity]);
		}
		navigate.push('/cart');
	};

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
			<HomeLinkContainer>
				<Link className='nav-tag' to='/'>
					return to shop
				</Link>
			</HomeLinkContainer>
			<DetailsCard>
				<HeaderOne>{data.title}</HeaderOne>
				<DetailsCardContainer>
					<ProductImage src={data.image} alt='product' />
					<br></br>
					<DetailsContainer>
						<div>
							{' '}
							<div>
								{' '}
								<HeaderThree>Category:</HeaderThree> {data.category}{' '}
							</div>
						</div>{' '}
						<div>
							{' '}
							<div>
								{' '}
								<HeaderThree>Description:</HeaderThree> {data.description}{' '}
							</div>
						</div>{' '}
						<div>
							{' '}
							<CornerDetails>
								<CornerDetailsText>
									${data.price}
									{/* <InputContainer> */}
									<HeaderFour>Quantity: </HeaderFour>
									<NumericInput
										className='form-control'
										min={1}
										max={50}
										value={quantity}
										onChange={(valueAsNumber) => (quantity = valueAsNumber)}
									/>
									{/* </InputContainer> */}
									<ButtonContainer>
										<MyButton normal onClick={() => addToCart(data)}>
											<CartIcon src={carticon} alt='cart' />
										</MyButton>
									</ButtonContainer>
								</CornerDetailsText>{' '}
							</CornerDetails>
						</div>{' '}
					</DetailsContainer>
				</DetailsCardContainer>
			</DetailsCard>
		</>
	);
}

export default ProductDetails;
