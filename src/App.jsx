import React, { Component, useState } from 'react';

class App2 extends Component {
  state = { 
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight      
    }  
  };
  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    });
  }
  componentDidMount () {
    document.title = this.state.count;

    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize, false);
  }
  componentDidUpdate () {
    document.title = this.state.count;

    window.addEventListener('resize', this.onResize, false);
  }
  render() {
    const { count, size } = this.state;

    return ( 
      <button
        type="button"
        onClick={() => {this.setState({count: count + 1})}}>
          Click ({count})
          size: {size.width * size.height}
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