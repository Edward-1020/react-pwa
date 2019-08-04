import React, { Component, useState } from 'react';

class App2 extends Component {
  state = { 
    count: 0,  
  };
  componentDidMount () {
    document.title = this.state.count;
  }
  componentDidUpdate () {
    document.title = this.state.count;
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

function App (props) {
  const  [count, setCount] = useState(() => {
    return props.defaultCount || 0;
  }); 

  return ( 
    <button
      type="button"
      onClick={() => {setCount(count + 1)}}>
        Click ({count})
    </button>
  );
}

export default App2;