import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	// position: fixed;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	font-size: 1rem;
	bottom: 0;
	height: 200px;
	width: 100vw;
	text-align: center;
	background-color: #c8d8e4;
	font-weight: 500;
	text-decoration: none;
	padding: 0 4px;
`;

function Footer() {
	let currentyear = new Date().getFullYear();
	return (
		<FooterStyle>
			<p className='footer-text'>
				{currentyear} Copyright ⓒ
				<Link className='footer-text' to='/CreatorProfile'>
					Susana Martins
				</Link>
			</p>
		</FooterStyle>
	);
}

export default Footer;
