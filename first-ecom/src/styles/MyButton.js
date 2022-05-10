import styled from 'styled-components';

const MyButton = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'black' : 'white')};
	color: ${(props) => (props.primary ? 'white' : 'black')};

	font-size: 1em;
	// height: 3em;
	// width: 3em;
	border-radius: 50%;
	padding: 0.8em 0.8em;
	border: 2px solid black;
`;

export default MyButton;
