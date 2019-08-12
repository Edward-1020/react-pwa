import React, {
  useState,
  useEffect,
  useMemo,
  memo,
  useCallback,
  useRef
} from 'react';

import './App.css';

let idSeq = Date.now();

const Control = memo(function Control ({
  dispatch
}) {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();

    if (newText.length === 0) {
      return;
    }

    dispatch({
      type: 'add',
      payload: {
        id: ++idSeq,
        text: newText,
        complete: false        
      }
    });

    inputRef.current.value = '';
  }

  return (
    <div className="control">
      <h1>
        todos
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="new-todo"
          placeholder="what needs to be done?"/>
      </form>
    </div>
  )
});

const TodoItem = memo(function TodoItem (props) {
  const {
    todo: {
      id,
      text,
      complete
    },
    dispatch
  } = props;

  const onChange = () => {
    dispatch({type: 'toggle', payload: id});
  };
  const onRemove = () => {
    dispatch({type: 'remove', payload: id});
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        onChange={onChange}
        checked={complete}/>
      <label className={complete ? 'complete' : ''}>{text}</label>
      <button onClick={onRemove}>&#xd7;</button>
    </li>
  );
});

const Todos = memo(function Todos ({
  todos,
  dispatch
}) {
  return (
    <ul>
      {
        todos.map(todo => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        })
      }
    </ul>
  )
});

const LS_KEY = '_$-todos_';

function TodoList () {
  const [todos, setTodos] = useState([]);

  const dispatch = useCallback((action) => {
    const { type, payload } = action;
    switch (type) {
      case 'set':
        setTodos(payload);
        break;
      case 'add':
        setTodos(todos => [...todos, payload]);
        break;
      case 'remove':
        setTodos(todos => todos.filter(todo => {
          return todo.id !== payload;
        }));
        break;
      case 'toggle':
        setTodos(todos => todos.map(todo => {
          return todo.id === payload
            ? {
              ...todo,
              complete: !todo.complete
            } : todo;
        }));
        break;
      default:
    }
  }, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY));
    dispatch({type: 'set', payload: todos});
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])


  return ( 
    <div className="todo-list">
      <Control dispatch={dispatch}/>
      <Todos
        dispatch={dispatch}
        todos={todos}/>
    </div>
  );
}

export default TodoList;