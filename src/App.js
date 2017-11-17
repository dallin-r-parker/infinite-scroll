import React, { Component } from 'react';
import './App.css';
import CarouselContainer from './components/carousel/CarouselContainer'

class App extends Component {
  render() {
    return (
        <div className="container">
            <CarouselContainer/>
        </div>
    );
  }
}

export default App;
