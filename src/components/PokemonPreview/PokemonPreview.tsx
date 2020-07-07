import React, { useContext } from 'react';
import PokeStat from '../PokeStat/PokeStat';

import './PokemonPreview.css';
import { TrainerContext } from '../../contexts/TrainerContext';
import pokemonStatNameDisplayer from '../../utils/pokemonStatNameDisplayer';
import pokemonNameCaptilizer from '../../utils/pokemonNameCaptilizer';

interface Stat {
    name: string
    value: number
};

function PokemonPreview() {
    const trainerContext = useContext(TrainerContext);
    const { state: { pokemon_preview } } = trainerContext;

    return (
        <>
            {
                pokemon_preview ?
                    (<div className="pokemon-preview-container" >
                        <div className="pokemon-name">{pokemonNameCaptilizer(pokemon_preview.name)}</div>
                        <div className="pokemon-id">Nº {pokemon_preview.id}</div>
                        <div className="pokemon-image">
                            <img src={pokemon_preview.high_res_url} alt="" />
                        </div>
                        <div className="pokemon-status-container">
                            {pokemon_preview.stats.map(({ name, value }: any) => (<PokeStat key={name + value} name={pokemonStatNameDisplayer(name)} value={value} />))}
                            <PokeStat name="Ability" value={pokemon_preview.abilities.join(', ')} />
                        </div>
                    </div>) : <></>
            }
        </>
    );
}

export default PokemonPreview;