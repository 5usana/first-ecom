import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
// import MyButton from '../styles/MyButton';

const FormContainer = styled.div`
	margin: 0 auto;
	padding: 4em 0em;
	text-align: center;
	// border: 4px solid red;
	width: 60%;
`;

const HeaderOne = styled.h1`
	font-size: 2.5rem;
	padding: 0em 0em 0.4em 0em;
	border-bottom: 0.1em solid #b0b8bc;
`;

const HeaderSix = styled.h6`
	font-size: 1rem;
	color: #708f7c;
`;
const Label = styled.label`
	color: #767676;
	margin: 0 auto;
	text-align: left;
	display: flex;
	width: 344px;
	// border: 4px solid red;
`;
const InputStyle = styled.input`
	width: 17em;
	height: 1.5em;
	border: none;
	border-bottom: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	// border: 4px solid green;
`;
const ButtonContainer = styled.div`
	// border: 2px solid blue;
	// padding: 0em 0em em 0em;
`;
const Button = styled.button`
	color: white;
	background-color: #b0b8bc;
	font-size: 1em;
	margin: 1em;
	padding: 0.3em 1.2em;
	border: 0em solid white;
	border-radius: 3px;
`;
function Checkout() {
	return (
		<div>
			<NavBar />
			{/* <h5>
				Checkout Page -Display name, $, quantity, total cost. Checkout form
				w/input - name, shipping address, billing address, CC info, submit
				button. SUBMITTING order clears cart + returns to come page
			</h5> */}
			<FormContainer>
				<form>
					<HeaderOne>Check Out</HeaderOne>
					<HeaderSix> Shipping </HeaderSix>
					<div className='form-group'>
						<Label>Full Name</Label>
						<InputStyle
							type='text'
							value='text'
							// name='text'
							className='form-control'
							placeholder='First Name'
							// onChange={handleChange}
						/>
					</div>
					<br></br>
					<div className='form-group'>
						<Label>Shipping Address</Label>
						<InputStyle
							type='text'
							value='text'
							// name='text'
							className='form-control'
							placeholder='First Name'
							// onChange={handleChange}
						/>
					</div>
					<br></br>
					<HeaderSix> Billing </HeaderSix>
					<div className='form-group'>
						<Label>Billing Address</Label>
						<InputStyle
							type='text'
							value='text'
							// name='text'
							className='form-control'
							placeholder='First Name'
							// onChange={handleChange}
						/>
					</div>
					<br />
					<div className='form-group'>
						<Label>Credit Card</Label>
						<InputStyle
							type='text'
							value='text'
							// name='text'
							className='form-control'
							placeholder='First Name'
							// onChange={handleChange}
						/>
					</div>
					<br />
					{/* <button type='submit' className='btn'>
						Submit
					</button> */}
					<ButtonContainer>
						<Button type='submit' primary>
							Submit
						</Button>
					</ButtonContainer>
				</form>
			</FormContainer>
		</div>
	);
}

export default Checkout;
