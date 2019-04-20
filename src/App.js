import React, { Component } from 'react';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights//Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import './resources/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
