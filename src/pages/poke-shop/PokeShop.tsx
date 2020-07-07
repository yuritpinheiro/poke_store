import React, { useContext, useEffect, useState } from 'react';
import './PokeShop.css'
import PokeShopItem from '../../components/PokeShopItem/PokeShopItem';
import PokeShopCart from '../../components/PokeShopCart/PokeShopCart';

import search_icon from '../../images/search.png';
import PokeWaterMarkCube from '../../components/PokeWaterMarkCube/PokeWaterMarkCube';
import PokemonPreview from '../../components/PokemonPreview/PokemonPreview';
import poke_service from '../../services/poke_service';
import { TrainerContext } from '../../contexts/TrainerContext';

function PokeShop() {
    const trainerContext = useContext(TrainerContext);
    const { state: { team, page, pokemon_preview, team_preview }, dispatch } = trainerContext;

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        async function loadPage() {
            const page = await poke_service.getPage(currentPage);
            dispatch({ type: 'fetch page', page });
        }
        loadPage();
    }, [currentPage, dispatch]);

    const handlePageChange = (step: number): void => {
        const nextPage = currentPage + step;
        if (nextPage < 0) {
            setCurrentPage(0);
        } else if (nextPage > poke_service.MAX_PAGE) {
            setCurrentPage(poke_service.MAX_PAGE);
        } else {
            setCurrentPage(nextPage);
        }
    };

    const handleAddPokemon = () => {
        trainerContext.dispatch({ type: "add team", pokemon: pokemon_preview });
    }

    const handleRemovePokemon = () => {
        trainerContext.dispatch({ type: "remove team", pokemon: pokemon_preview });
    }

    const handleClosePreview = () => {
        trainerContext.dispatch({ type: "close preview" });
    }

    return (
        <div className="shop-container">
            <div className="shop-ui-container">
                <PokeShopCart />
                <div className="pokemon-list-container">
                    <div className="search-box">
                        <div className="frame">
                            <img src={search_icon} alt="" />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="pokemon-list">
                        {page.map(({ id, spriteURL }: any) => <PokeShopItem key={id} spriteURL={spriteURL} id={id}></PokeShopItem>)}
                    </div>

                    <div className="box-paginator">
                        <div className="frame">
                            <i className="fa fa-caret-left fa-3x" aria-hidden="true" onClick={(e) => handlePageChange(-1)} />
                            <span>Box {currentPage + 1}</span>
                            <i className="fa fa-caret-right fa-3x" aria-hidden="true" onClick={(e) => handlePageChange(1)} />
                        </div>
                    </div>
                </div>
                <div className="poke-shop-preview-container">
                    <PokemonPreview />
                    <button
                        className="add-pokemon"
                        onClick={(e) => handleAddPokemon()}
                        hidden={team.length >= 6 || !pokemon_preview || team_preview}>
                        Add
                    </button>
                    <button className="add-pokemon" onClick={(e) => handleRemovePokemon()} hidden={!team_preview}>Remove</button>
                    <button className="add-pokemon" onClick={(e) => handleClosePreview()} hidden={!pokemon_preview}>Close</button>

                </div>
            </div>

            <PokeWaterMarkCube />
        </div>
    );
}

export default PokeShop;
