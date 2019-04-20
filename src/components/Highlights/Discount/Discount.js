import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from './../../../components/UI/Button/Button';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    getPercentage() {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({ discountStart: this.state.discountStart + 1 });
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.getPercentage();
        }, 30);
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade onReveal={() => this.getPercentage()}>
                        <div className='discount_percentage'>
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className='discount_description'>
                            <h3>Purchase tickets before 20th JUNE</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium amet facilis, placeat aperiam, dolor sequi nam modi distinctio numquam molestias provident. Libero veniam consectetur quia ad earum adipisci repudiandae?
                        </p>
                            <div>
                                <Button
                                    text="Learn more"
                                    background='#ffa800'
                                    color='#fff'
                                    link="https://www.google.com"
                                />
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;