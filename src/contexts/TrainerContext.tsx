import React, { createContext, useReducer } from 'react';

interface Pokemon {
    name: string;
    number: number;
    hp: number;
    attack: number;
    defense: number;
    spatk: number;
    spdef: number;
    speed: number;
}

interface TrainerContext {
    // state?: any,
    // dispatch?: any,
    team?: Pokemon[];
    box?: Pokemon[];
}

const initialState: any = {
    team: [],
    page: [],
    pokemon_preview: undefined,
    team_preview: false
};

const TrainerContext = createContext(initialState);

const { Provider } = TrainerContext;

const UserContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'add team':
                const state_add_pokemon = { ...state, team: [...state.team, action.pokemon], pokemon_preview: undefined }
                return state_add_pokemon;

            case 'remove team':
                const removed_team = state.team.filter((p: any) => p !== action.pokemon);
                const state_remove_pokemon = {
                    ...state,
                    team: [...removed_team],
                    pokemon_preview: undefined,
                    team_preview: false
                };
                return state_remove_pokemon;

            case 'open preview':
                const state_open_preview = {
                    ...state,
                    pokemon_preview: action.pokemon_preview,
                    team_preview: false
                };
                return state_open_preview;

            case 'team preview':
                const state_team_preview = {
                    ...state,
                    pokemon_preview: action.pokemon,
                    team_preview: true
                };
                return state_team_preview;

            case 'close preview':
                const state_close_preview = {
                    ...state,
                    pokemon_preview: undefined,
                    team_preview: false
                };
                return state_close_preview;

            case 'fetch page':
                const state_fetch_page = {
                    ...state,
                    page: action.page
                }
                return state_fetch_page;

            default:
                throw new Error();
        }
    }, initialState);
    return (
        <Provider value={{ state, dispatch }}>{children}</Provider>
    );
};

export { TrainerContext, UserContextProvider };