

export default function pokemonNameCaptilizer(pokemonName: string): string{
    if (!pokemonName) {
        return "";
    }
    const capitalizedPokemonName = pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1, pokemonName.length);
    return capitalizedPokemonName;
}
