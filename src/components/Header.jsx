import React, { useState, useContext } from "react";
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import Menu from "@components/Menu";
import ToggleMobileMenu from "@components/ToggleMobileMenu"
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";
import "@styles/Header.scss";

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu)
  }

  return (
    <>
      <nav>
        <img 
        src={menu} 
        alt="menu" 
        className="menu"
        onClick={() => handleToggleMobileMenu()}
        />
        {toggleMobileMenu && <ToggleMobileMenu /> }
        <div className="navbar-left">
          <img src={logo} alt="logo" className="nav-logo" href='/'/>
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li
            className="navbar-email"
              onClick={() => toggleMenu()}
            >
              roberto@gmail.com
            </li>
            <li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
              <img
                src={shoppingCart}
                alt="shopping cart"
              />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
