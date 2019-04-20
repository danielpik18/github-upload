import React, { Component } from 'react';
import Button from './../UI/Button/Button';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        packages: [{
            price: 100,
            position: 'Balcony',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta earum, velit.',
            link: 'https://www.google.com',
            key: 1
        }, {
            price: 150,
            position: 'Medium',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta earum, velit.',
            link: 'https://www.google.com',
            key: 2
        }, {
            price: 250,
            position: 'First line',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dicta earum, velit.',
            link: 'https://www.google.com',
            key: 3
        }]
    }

    renderPackages = () => {
        return (
            this.state.packages.map((pckg, index) => {
                console.log(index)
                return (
                    <Zoom key={index} delay={index === 0 ? 300 : (index === 2 ? 600 : 0)}>
                        <div className='pricing_item' >
                            <div className='pricing_inner_wrapper'>
                                <div className='pricing_title'>
                                    <span>${pckg.price}</span>
                                    <span>{pckg.position}</span>
                                </div>
                                <div className='pricing_description'>
                                    {pckg.description}
                                </div>
                                <div className='pricing_buttons'>
                                    <Button
                                        text='Get this package'
                                        background='#ffa800'
                                        color='#fff'
                                        link={pckg.link} />
                                </div>
                            </div>
                        </div>
                    </Zoom>
                )
            }
            )
        )
    }

    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.renderPackages()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;