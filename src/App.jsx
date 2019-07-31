import React, { Component, createContext } from 'react';
import './App.css';

const BetteryContext = createContext();

class Leaf extends Component {
  static contextType = BetteryContext;

  render () {
    const battery = this.context;

    return (
        <h1>Battery: {battery}</h1>
    );
  }
}

class Middle extends Component {
  render () {
    return <Leaf/>;
  }
}

class App extends Component {
  state = {
    battery: 30
  }

  render () {
    const { battery } = this.state;

    return (
      <BetteryContext.Provider value={battery}>
          <button type="button" onClick={() => this.setState({battery: battery - 1})}>
            Press-Battery
          </button>
          <Middle/>
      </BetteryContext.Provider>
    );
  }
}

export default App;
