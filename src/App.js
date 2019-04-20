import React, { Component } from 'react';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights//Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import { Element } from 'react-scroll';
import './resources/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />

        <Element name='venueInfo'>
          <VenueInfo />
        </Element>

        <Element name='highlights'>
          <Highlights />
        </Element>

        <Element name='pricing'>
          <Pricing />
        </Element>

        <Element name='location'>
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
