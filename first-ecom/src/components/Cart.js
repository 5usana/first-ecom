import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const { cart, setCart } = useContext(CartContext);
	let totalItems = 0;

	const deleteItem = (product) => {
		console.log(cart);
		const updatedCart = cart.filter((p) => {
			return p.id !== product.id;
		});
		setCart(updatedCart);
		console.log(updatedCart);
	};

	const totalPrice = cart
		.reduce((total, product) => {
			return total + product.price * product.quantity;
		}, 0)
		.toFixed(2);

	cart.map((p) => (totalItems += p.quantity));
	const navigate = useNavigate();
	return (
		<>
			{cart.map((product) => (
				<div>
					<div>{product.title}</div>
					<img src={product.image} alt='products' />
					<h5> $ {product.price} </h5>
					<h5> Quantity: {product.quantity} </h5>
					<button onClick={() => deleteItem(product)}> Delete Item </button>
				</div>
			))}

			<h4>Total Price: ${totalPrice} </h4>
			<button onClick={() => navigate.push('/products')}> Add Items</button>
			<button onClick={() => navigate.push('/checkout')}> CheckOut </button>
		</>
	);
}

export default Cart;
