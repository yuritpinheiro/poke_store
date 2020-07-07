import React from 'react';

import "./PokeBase.css";

function PokeBase() {
    return (
        <svg className="poke-base-container">
            <ellipse className="pokeball-shape" cx="32" cy="16" rx="32" ry="16" />
            <line className="pokeball-mid-line" x1="0" y1="16" x2="64" y2="16" />
            <ellipse className="pokeball-button-shape" cx="32" cy="16" rx="8" ry="4" />
        </svg>
    );
}

export default PokeBase;