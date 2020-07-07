import React from 'react';

import './PokeWaterMarkCube.css';

function PokeWaterMarkCube() {
    const o_ball_center_x = 268;
    const o_ball_center_y = 410;
    const i_ball_center_x = 266;
    const i_ball_center_y = 410;
    return (
        <svg className="poke-cube-water-mark-container">
            {/* <circle cx="100" cy="100" r="100"/> */}
            {/* <line className="border thick" x1="65" y1="280" x2="240" y2="32"/> */}
            <polygon className="poke-cube-border outer-border"
                points="67,280 238,38 527,62 645,310 480,550 185,530" />
            <polyline className="poke-cube-border inner-border" points="65,278 358,298 530,60" />
            <ellipse className="poke-cube-border inner-border poke-ball-cube"
                cx={o_ball_center_x}
                cy={o_ball_center_y}
                rx="65" ry="103"
                transform={`rotate(-52 ${o_ball_center_x} ${o_ball_center_y})`} />
            <line className="poke-cube-border poke-ball-cube"
                x1="285" y1="400" x2="328" y2="374" />
            <line className="poke-cube-border poke-ball-cube"
                x1="210" y1="445" x2="247" y2="423" />
            <ellipse className="poke-cube-border poke-ball-cube"
                cx={i_ball_center_x}
                cy={i_ball_center_y}
                rx="23" ry="36"
                transform={`rotate(-53 ${i_ball_center_x} ${i_ball_center_y})`} />
        </svg>
    );
}

export default PokeWaterMarkCube;