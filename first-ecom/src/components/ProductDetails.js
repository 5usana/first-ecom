import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
	border: 10px solid yellow;
`;

function ProductDetails() {
	return (
		<DetailsContainer>
			ProductDetails -image, title, $, category, description. Quantity - default
			value of 1. Add to Cart BUTTON. Quantity added to cart once button
			selected
		</DetailsContainer>
	);
}

export default ProductDetails;
