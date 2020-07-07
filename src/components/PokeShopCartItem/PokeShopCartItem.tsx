import React, { useContext } from 'react';
import PokeBase from '../PokeBase/PokeBase';

import './PokeShopCartItem.css';
import pokemonNameCaptilizer from '../../utils/pokemonNameCaptilizer';
import { TrainerContext } from '../../contexts/TrainerContext';

interface Props {
    pokemon: any
}
function PokeShopCartItem({ pokemon }: Props) {
    const trainerContext = useContext(TrainerContext);
    const {dispatch} = trainerContext;

    const handleTeamPreview = () => {
        dispatch({type: 'team preview', pokemon})
    }

    return (
        <div className="shop-cart-item-container" onClick={(e) => handleTeamPreview()}>
            <div className="frame">
                <div className="poke-sprite">
                    <PokeBase />
                    {pokemon ? 
                    <img src={pokemon.spriteURL}
                        alt={pokemonNameCaptilizer(pokemon.name)} /> 
                    : <></>}
                </div>
                {pokemon ? (<div className="poke-status">
                    <span className="pokemon-name">{pokemonNameCaptilizer(pokemon.name)}</span>
                    <span className="pokemon-data">Nº. {pokemon.id}</span>
                </div>) : <></>}

        </div>
        </div >
    );
}

export default PokeShopCartItem;