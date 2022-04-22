import React from 'react';
import '@styles/ToggleMobileMenu.scss';

const Menu = () => {
	return (
        <div className="ToggleMobileMenu">
            <h1>Categories</h1>
            <div className="categories">
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
            <div className='account'>
                <ul>
                    <li>
                        <a href="/" >My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                </ul>
            </div>
            <div className='signout'>
                <ul >
                    <li>
                        roberto@gmail.com
                    </li>
                    <li>
                        <a className='btnSignout' href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
	);
}

export default Menu;