import React, { Component } from 'react';

class App extends Component {
  state = { 
    count: 0,  
  }
  render() {
    const { count } = this.state;

    return ( 
      <button
        type="button"
        onClick={() => {this.setState({count: count + 1})}}>
          Click ({count})
      </button>
    );
  }
}
 
export default App;