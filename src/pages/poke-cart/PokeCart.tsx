import React from 'react';

import './PokeCart.css';
import PokeWaterMarkPokeball from '../../components/PokeWaterMarkPokeball/PokeWaterMarkPokeball';
import PokeList from '../../components/PokeList/PokeList';
import PokemonPreview from '../../components/PokemonPreview/PokemonPreview';

function PokeCart() {
    
    return (
        <div className="poke-cart-container">
            <div className="poke-cart-background">
                <PokeWaterMarkPokeball />
            </div>
            <div className="poke-cart-ui-container">
                <div className="poke-list-container">
                    <span style={{ fontSize: "6em", fontWeight: "bolder", marginLeft: "128px" }}>POKEMON</span>
                    <PokeList />
                </div>
                <PokemonPreview />
            </div>
        </div>
    );
}

export default PokeCart;