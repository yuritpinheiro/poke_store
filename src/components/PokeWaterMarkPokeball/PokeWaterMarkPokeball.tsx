import React from 'react';

import "./PokeWaterMarkPokeball.css";

function PokeWaterMarkPokeball() {
    return (
        // <div className="poke-water-mark-pokeball-container">
            <svg className="poke-water-mark-pokeball-container" width="600" height="530">
                <circle className="outer-border" cx="310" cy="300" r="278"/>
                <circle className="inner-border" cx="310" cy="303" r="102"/>
                <line className="inner-border" x1="411" y1="255" x2="566" y2="185"/>
                <line className="inner-border" x1="76" y1="406" x2="226" y2="338"/>
                {/* <line className="inner-border" x1="100" y1="500" x2="300" y2="300"/> */}
            </svg>
        // </div>
    );
}

export default PokeWaterMarkPokeball;