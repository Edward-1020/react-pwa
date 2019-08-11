import React, {
  useState,
  useEffect,
  useMemo,
  memo,
  useCallback,
  useRef
} from 'react';

import './App.css';

function Control () {
  return <div></div>
}

function Todos () {
  return <div></div>
}

function TodoList () {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos(todos => [...todos, todo])
  };

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  };

  const toggleTodo = (id) => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? {
          ...todo,
          complete: !todo.complete
        }
        : todo;
    }))
  };

  return ( 
    <div className="todo-list">
      <Control addTodo={addTodo}/>
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default TodoList;