import React, { useContext, useState} from "react";
import AppContext from "@context/AppContext";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg"
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductItem.scss";

const ProductItem = ({ product }) => {
  const { state, setState, addToCart, removeFromCart} = useContext(AppContext);
  const [info, setInfo] = useState(false)

  const handleClick = item => {
		state.cart.includes(product) ? removeFromCart(item) : addToCart(item)
	}
  const HandleInfo = () => {
    setInfo(!info)
    setState({
      ...state,
      orderIsOpen: false,
      menuIsOpen: false,
    });
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} onClick={() => HandleInfo()} />
      {info && <ProductInfo product={product} setInfo={setInfo} />}
      <span className="categoryName">{product.category.name}</span>
      
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
        {state.cart.includes(product) ? (
            <img
              src={addedToCartImage}
              alt="added to cart"
            />
          ) : (
            <img
              src={addToCartImage}
              alt="add to cart"
              
            />
          )}
        </figure>
      </div>
      
    </div>
  );
};

export default ProductItem;
