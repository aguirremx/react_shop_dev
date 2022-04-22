import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state, toggleOrder } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container" onClick={() => toggleOrder()}>
        <img src={arrow} alt="arrow" />
        <p className="my-order-title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
      <div className="order">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
        <p>{state.cart.length} articles</p>
      </div>
      <NavLink to="/checkout" onClick={() => toggleOrder()}>
        <p className="primary-button">Checkout</p>
      </NavLink>
    </aside>
  );
};

export default MyOrder;
