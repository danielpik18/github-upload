import React from 'react';
import iconCalendar from '../../resources/images/icons/calendar.png';
import iconLocation from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
    return (
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>

                    <Zoom duration={600}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'>

                                    </div>
                                    <div
                                        className='vn_icon'
                                        style={{ background: `url(${iconCalendar})` }}>
                                    </div>
                                    <div className='vn_title'>
                                        Event date & time
                                </div>
                                    <div className='vn_desc'>
                                        7 February 2020 @9:00 p.m
                                </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={600} delay={400}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'>

                                    </div>
                                    <div
                                        className='vn_icon'
                                        style={{ background: `url(${iconLocation})` }}>
                                    </div>
                                    <div className='vn_title'>
                                        Event location
                                </div>
                                    <div className='vn_desc'>
                                        Wembley stadium, UK
                                </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VenueInfo;