import React, { Component, useState } from 'react';

class App2 extends Component {
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

function App () {
  const  [count, setCount] = useState(0);
  const  [name, setName] = useState('Mike');

  return ( 
    <button
      type="button"
      onClick={() => {setCount(count + 1)}}>
        Click ({count}), name ({name})
    </button>
  );
}

export default App;