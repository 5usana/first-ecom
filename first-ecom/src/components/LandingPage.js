import React from 'react';
import styled from 'styled-components';
import heroPic from '../images/hero.jpg';

const GrabberContainer = styled.div`
	display: flex;
	padding: 80px 0px 0px 0px;
	justify-content: center;
	align-items: center;
	height: 12vw;
`;
const Headline = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 15px 20px 10px 20px;
	// background-color: black;
	background-color: #808080;
	font-size: 2.5vw;
	color: white;
	height: 3.5vw;
	width: 85vw;
`;
const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 6rem;
	height: 65vw;
	width: 100vw;
	background-image: url(${heroPic});
	background-size: cover;
	color: white;
`;
const Hero = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	color: white;
`;

function LandingPage() {
	return (
		<div>
			<GrabberContainer>
				<Headline>FREE SHIPPING RETURNS ON ALL U.S. ORDERS</Headline>
			</GrabberContainer>
			<HeroContainer>
				<Hero>NEW ARRIVALS</Hero>
			</HeroContainer>
		</div>
	);
}

export default LandingPage;
