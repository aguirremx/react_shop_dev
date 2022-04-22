import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import '@styles/ProductInfo.scss';
import add_cart from '@icons/bt_add_to_cart.svg'

const ProductInfo = ({product, info, setInfo}) => {
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const handleClick = item => {
		state.cart.includes(product) ? removeFromCart(item) : addToCart(item)
	}

	return (
		<div className='ProductInfo'>
			<span onClick={() => setInfo(!info)}> X CLOSE</span>
			<img src={product.images[0]} />
			<div className="ProductInfo-container">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button 
				className="primary-button add-to-cart-button"
				onClick={() => handleClick(product)}
				>
					{state.cart.includes(product) ?' Remove From Cart' : 'Add to cart'}
					{/* <img src={add_cart} />
					Add to cart */}
				</button>
			</div>
		</div>
	);
}

export default ProductInfo;