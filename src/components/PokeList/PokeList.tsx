import React, { useContext } from 'react';

import "./PokeList.css";
import PokeShopCartItem from '../PokeShopCartItem/PokeShopCartItem';
import { TrainerContext } from '../../contexts/TrainerContext';

function PokeList() {

    const trainerContext = useContext(TrainerContext);
    const { state: { team } } = trainerContext;

    return (
        <div className="poke-shop-cart-list-items">
            {[0, 1, 2, 3, 4, 5].map((i) => (<PokeShopCartItem key={i} pokemon={team[i]} />))}
        </div>
    );
}

export default PokeList;