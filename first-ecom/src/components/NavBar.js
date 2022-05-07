import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.section`
	display: flex;
	flex-direction: row;
	// position: fixed;
	border-bottom: 3px solid black;
`;
const HomeNav = styled.nav`
	padding: 8px 250px 0px 50px;
    color: #2b6777;
	height: 100px;
	font-size: 3.9rem;
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
