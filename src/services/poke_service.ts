import axios from 'axios'
import pokemonNameCaptilizer from '../utils/pokemonNameCaptilizer';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const POKE_API_SPRITE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API_SPRITE_FILE_EXTENSION = '.png';
const POKE_HIGH_RES_BASE_URL = 'https://pokeres.bastionbot.org/images/pokemon/';
const POKE_HIGH_RES_FILE_EXTENSION = '.png';

const MAX_PAGE = 26;

const _poke_api_client = axios.create({
    baseURL: POKE_API_BASE_URL
});

const _getSpriteURL = (id: number): string => {
    return POKE_API_SPRITE_URL + id + POKE_API_SPRITE_FILE_EXTENSION;
};

const _getHighResURL = (id: number) => {
    return POKE_HIGH_RES_BASE_URL + id + POKE_HIGH_RES_FILE_EXTENSION;
};

const getPage = async (page: number) => {
    let valid_page = page;
    if (page < 0) {
        valid_page = 0;
    }

    if (page > MAX_PAGE) {
        valid_page = MAX_PAGE - 1;
    }

    let last_pokemon = (page + 1) * 30 <= 807 ? 30 : 807 - (page * 30);

    const result = await _poke_api_client.get(`/?limit=${last_pokemon}&offset=${valid_page * 30}`);
    const pokemon_page = result.data.results.map((p: any) => {
        const id = p.url.split('/')[6];
        return {
            name: p.name,
            id,
            spriteURL: _getSpriteURL(id)
        }
    });
    return pokemon_page;
};

const getPokemon = async (id: number) => {
    const { data: api_pokemon } = await _poke_api_client.get(`${id}`);
    // console.log(result.data);
    const stats = api_pokemon.stats.map(({ stat, base_stat }: any) => ({ name: stat.name, value: base_stat }));
    const abilities = api_pokemon.abilities.map(({ability: {name}}:any) => pokemonNameCaptilizer(name) );
    const pokemon = {
        id: api_pokemon.id,
        name: api_pokemon.name,
        stats,
        abilities,
        types: api_pokemon.types,
        high_res_url: _getHighResURL(api_pokemon.id),
        spriteURL: _getSpriteURL(id)
    };
    return pokemon;
}

const poke_service = {
    _poke_api_client,
    getPage,
    getPokemon,
    MAX_PAGE
}


// https://pokeres.bastionbot.org/images/pokemon/780.png

export default poke_service;