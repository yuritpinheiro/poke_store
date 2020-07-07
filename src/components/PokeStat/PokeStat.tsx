import React from 'react';

import "./PokeStat.css";

interface PokeStatProps {
    name: string,
    value: number|string
}

function PokeStat({ name, value }: PokeStatProps) {
    return (
        <div className="pokemon-stat">
            <span className="pokemon-stat-name">{name}</span>
            <span className="pokemon-stat-value">{value}</span>
        </div>
    );
}

export default PokeStat;