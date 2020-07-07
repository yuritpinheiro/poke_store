import React, { useContext } from 'react';

import './PokeShopItem.css'
import { TrainerContext } from '../../contexts/TrainerContext';
import poke_service from '../../services/poke_service';

interface Props {
  spriteURL: string,
  id: number,
}

function PokeShopItem({ spriteURL, id }: Props) {

  const trainerContext = useContext(TrainerContext);

  async function handleClick(e: any) {
    const pokemon_preview = await poke_service.getPokemon(id);
    trainerContext.dispatch({type: 'open preview', pokemon_preview});
  };

  return (
    <div className="poke-shop-item-container">
      <div className="frame" onClick={(e) => handleClick(e)}>
        <img src={spriteURL} alt="" />
        <span>Nº {id}</span>
      </div>
    </div>
  );
}

export default PokeShopItem;
