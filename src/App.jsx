import React, {
  Component,
  PureComponent,
  useState,
  useEffect,
  useMemo,
  memo,
  useCallback,
  useRef
} from 'react';

class Counter extends PureComponent {
  speak () {
    console.log('now counter is: 111')
  }

  render () {
    const { props } = this;
    return (
      <h1 onClick={props.onClick}>{props.count}</h1>
    )
  }
}

function App () {
  const  [count, setCount] = useState(0);
  const  [clickCount, setClickCount] = useState(0);
  const counterRef = useRef();

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]) 

  const onClick = useCallback(() => {
    console.log('Click');
    setClickCount(clickCount => clickCount + 1);
    counterRef.current.speak();
  }, [counterRef]);
  const it = useRef();


  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  })

  return ( 
    <div>
      <button
        type="button"
        onClick={() => {setCount(count + 1)}}>
          Click ({count}), double: {double}
      </button>
      <Counter ref={counterRef} count={double} onClick={onClick}/>  
    </div>
  );
}

export default App;