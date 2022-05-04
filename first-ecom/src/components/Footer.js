import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	font-size: 1rem;
	bottom: 0;
	height: 200px;
	width: 100vw;
	text-align: center;
	background-color: #c8d8e4;
`;

function Footer() {
	let currentyear = new Date().getFullYear();
	return (
		<FooterStyle>
			<p className='footer-text'>{currentyear} Copyright ⓒ Susana Martins </p>
			{/* <Link className='footer-text' to='/about'>
				5usana
			</Link> */}
		</FooterStyle>
	);
}

export default Footer;
