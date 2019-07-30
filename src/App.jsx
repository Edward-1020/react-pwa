import React, { Component, createContext } from 'react';
import './App.css';

const BetteryContext = createContext();

class Leaf extends Component {
  render () {
    return (
      <BetteryContext.Consumer>
        {
          battery => <h1>Battery: {battery}</h1>
        }
      </BetteryContext.Consumer>
    );
  }
}

class Middle extends Component {
  render () {
    return <Leaf/>;
  }
}

class App extends Component {
  render () {
    return (
      <BetteryContext.Provider value={60}>
        <Middle/>
      </BetteryContext.Provider>
    );
  }
}

export default App;
