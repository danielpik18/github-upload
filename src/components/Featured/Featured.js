import React from 'react';
import Carrousel from './Carrousel/Carrousel';
import Countdown from './Countdown/Countdown';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carrousel />

            <div className='artist_name'>
                <div className='wrapper'>Ariana Grande</div>
            </div>

            <Countdown />

        </div>
    );
};

export default Featured;