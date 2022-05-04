import React from 'react';
import susana from '../images/avatar-susana.png';
// import NavBar from './NavBar';
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

function CreatorProfile() {
	return (
		<>
			{/* <NavBar /> */}
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
