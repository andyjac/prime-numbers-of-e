import React, { Component } from 'react';
import { render } from 'react-dom';
import Info from './components/Info';
import PrimeCalculator from './components/PrimeCalculator';

class App extends Component {
  render() {
    return (
      <section id='app-container'>
        <div className='content'>
          <Info/>
          <PrimeCalculator/>
        </div>
      </section>
    );
  }
}

render(<App/>, document.getElementById('app'));
