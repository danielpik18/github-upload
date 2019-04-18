import React, { Component } from 'react';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import './resources/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1000px', backgroundColor: '#1f1f1f' }}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
