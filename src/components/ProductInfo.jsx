import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import close from '@icons/icon_close.png'
import '@styles/ProductInfo.scss';


const ProductInfo = ({product, setInfo}) => {
	const { state, addToCart, removeFromCart} = useContext(AppContext);

	const handleClick = item => {
		state.cart.includes(product) ? removeFromCart(item) : addToCart(item)
		console.log(product)
	}

	return (
		<div className='ProductInfo'>
			<div className='infoCard' >
				<div className='divClose'>
					<img src={close} className="closeInfo" onClick={() => setInfo(false)}/> 
				</div>
				<img src={product.images[0]} />
				<div className="ProductInfo-container">
					<p>${product.price}</p>
					<p>{product.title}</p>
					<p>Category: {product.category.name}</p>
					<div className="description">
						<p>{product.description}</p>
					</div>
					<button 
					className="primary-button"
					onClick={() => handleClick(product)}
					>
						{state.cart.includes(product) ?' Remove From Cart' : 'Add to cart'}

					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductInfo;