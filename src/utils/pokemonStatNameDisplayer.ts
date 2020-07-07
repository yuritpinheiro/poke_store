const _stat_map: any = {
    "hp": "HP",
    "attack": "Attack",
    "defense": "Defense",
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
    "speed": "Speed",
};

export default function pokemonStatNameDisplayer(stat_key: any): string {
    return _stat_map[stat_key];
}