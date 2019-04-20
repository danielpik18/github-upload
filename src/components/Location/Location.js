import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12087.43600605869!2d-73.9799236!3d40.7651258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d14b15e5c7a9477!2sCarnegie+Hall!5e0!3m2!1ses-419!2sco!4v1555761740847!5m2!1ses-419!2sco"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;