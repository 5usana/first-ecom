import React from 'react';
import susana from '../images/avatar-susana.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderOne = styled.h1`
	font-size: 2.5rem;
	text-align: center;
`;
const Section = styled.section`
	display: flex;
	flex-flow: row wrap;
`;
const MyAvatar = styled.figure`
	width: 280px;
	margin: 0 auto;
	margin-bottom: 24px;
	text-align: center;

	&.mobile {
		width: 180px;
	}
`;
const MyName = styled.a`
	padding-top: 8px;
	margin: 0 auto;
	font-size: 2rem;
	color: #222f65;
`;
const Nav = styled.div`
	margin: 0 auto;
	padding: 16px 24px;
	height: 72px;
	font-size: 1rem;
	.nav-tag {
		color: #222f65;
		font-weight: 300;
		text-decoration: none;
	}
`;

function CreatorProfile() {
	return (
		<>
			<Nav>
				<Link className='nav-tag' to='/'>
					return to shop
				</Link>
			</Nav>
			<HeaderOne>Hey, checkout my Github</HeaderOne>
			<Section>
				<MyAvatar>
					<a href='https://www.linkedin.com/in/susanacmartins/' target='blank'>
						<img src={susana} alt='susana avatar' />
					</a>
					<MyName href='https://github.com/5usana' target='blank'>
						5usana
					</MyName>
				</MyAvatar>
			</Section>
		</>
	);
}

export default CreatorProfile;
