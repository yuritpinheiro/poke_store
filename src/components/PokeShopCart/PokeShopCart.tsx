import React from 'react';
import './PokeShopCart.css';
import PokeList from '../PokeList/PokeList';

import { Link } from 'react-router-dom';

function PokeShopCart() {
    return (
        <div className="poke-shop-cart-container">
            <div className="poke-shop-cart-header">
                <div className="frame">
                    <span className="poke-shop-cart-header-title">Party</span>
                </div>
            </div>

            <PokeList />

            <Link to='/cart'>
                <div className="poke-shop-cart-header">
                    <div className="frame">
                        <span className="poke-shop-cart-header-title">BATTLE</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default PokeShopCart;