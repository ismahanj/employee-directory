import React from 'react';
import './index.css';


function Hero(props) {
    return (
        <div className='hero text-center' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.children}
        </div>
    )
}

export default Hero;