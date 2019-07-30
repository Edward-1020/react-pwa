import React, { Component, createContext } from 'react';
import './App.css';

const BetteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends Component {
  render () {
    return (
      <BetteryContext.Consumer>
        {
          battery => (
            <OnlineContext.Consumer>
              {
                online => (<h1>Battery: {battery}, Online: {online}</h1>)
              }
            </OnlineContext.Consumer>
          )
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
  state = {
    battery: 30,
    online: 60
  }

  render () {
    const { battery, online } = this.state;

    return (
      <BetteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button type="button" onClick={() => this.setState({battery: battery - 1})}>
            Press-Battery
          </button>
          <button type="button" onClick={() => this.setState({online: online - 1})}>
            Press-Online
          </button>
          <Middle/>
        </OnlineContext.Provider>
      </BetteryContext.Provider>
    );
  }
}

export default App;
