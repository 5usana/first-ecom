import styled from 'styled-components';

const MyButton = styled.button`
	/* Adapt the colors based on primary prop */
	background: ${(props) => (props.primary ? 'black' : '#708f7c')};
	color: ${(props) => (props.primary ? 'white' : 'black')};

	font-size: 1em;
	// height: 3em;
	// width: 3em;
	border-radius: 50%;
	padding: 0.8em 0.8em;
	border: 0.17em solid black;
`;

export default MyButton;
