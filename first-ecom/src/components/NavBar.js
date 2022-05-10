import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.section`
	position: fixed;
	display: flex;
	flex-direction: row;
	width: 100vw;
	background-color: black;
`;
const HomeNav = styled.div`
	padding: 0px 250px 8px 50px;
	color: white;
	height: 70px;
	font-size: 2.8rem;
	font-family: 'Permanent Marker', cursive;
    <style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
</style>
	// border: 2px solid palevioletred;
`;

function NavBar() {
	return (
		<NavContainer>
			<HomeNav>Stuff</HomeNav>
		</NavContainer>
	);
}

export default NavBar;
