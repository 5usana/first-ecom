import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import cart from '../images/cart-shopping-solid (1).svg';

const NavContainer = styled.div`
	position: fixed;
	display: flex;
	flex-direction: row;
	// justify-content: space-evenly;
	width: 100vw;
	// background-color: #a4aaa4;
	background-color: black;
`;
const OptionsContainer = styled.div`
	// border: 2px solid red;
`;
const Store = styled.div`
	padding: 0px 250px 8px 50px;
	color: white;
	font-size: 3.2rem;
	font-family: 'Permanent Marker', cursive;
    <style>
	@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
	</style>
	// border: 2px solid red;
	// height: 70px;
`;
// const HomeLinkContainer = styled.div`
// 	margin: 0 auto;
// 	// justify-content: flex-end;
// 	// padding: 16px 24px;
// 	// height: 72px;
// 	font-size: 1rem;
// 	.nav-tag {
// 		color: white;
// 		font-weight: 350;
// 		text-decoration: none;
// 	}
// `;
// const LinkContainer = styled.div`
// 	border 2px solid red;
// `;
// const CartIcon = styled.img`
// 	width: 5em;
// 	float: right;
// `;

function NavBar() {
	return (
		<NavContainer>
			<OptionsContainer>
				<Store>Stuff</Store>

				{/* <LinkContainer>
					<Link to={`/cart`}>
						{' '}
						CART
						<CartIcon src={cart} alt='cart' />
					</Link>
				</LinkContainer> */}
			</OptionsContainer>
			{/* <HomeLinkContainer>
				<Link className='nav-tag' to='/'>
					return to shop
				</Link>
			</HomeLinkContainer> */}
		</NavContainer>
	);
}

export default NavBar;
