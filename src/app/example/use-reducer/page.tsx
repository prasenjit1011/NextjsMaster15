"use client"
import React, { useReducer, useEffect, useState, useId } from 'react';
import "../../../styles/globals.css"
import Portal from './Portal';


function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, isRunning: true };
    case 'PAUSE':
      return { ...state, isRunning: false };
    case 'RESET':
      return { count: 10, isRunning: false };
    case 'TICK':
      return state.count > 0
        ? { ...state, count: state.count - 1 }
        : { ...state, isRunning: false };
    default:
      return state;
  }
}

export default function Countdown() {
    const initialState = {
        count: 10,
        isRunning: false,
    };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const id1 = useId(); 
  const id2 = useId(); 

  useEffect(() => {
    let timer;
    if (state.isRunning && state.count > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.isRunning, state.count]);


  const WrappedComponent = () => {
    return `<div><br /><hr /><br /><hr /></div>`;
  }

  function withLogger(WrappedComponent) {
    return function LoggedComponent(props) {
      console.log('Props:', props);
      return <WrappedComponent {...props} />;
    };
  }
  
  // Original component
  function MyComponent(props) {
    return <><h3>Hello {props.name}, I am HOC</h3><hr /></>;
  }
  
  // Enhanced component
  const MyComponentWithLogger = withLogger(MyComponent);
  

  
  return (
    <div className="content">
      <MyComponentWithLogger name="Prasenjit" />
      
      <h1>Countdown: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'START' })} disabled={state.isRunning} className='btnA' >
        Start
      </button>
      <button onClick={() => dispatch({ type: 'PAUSE' })} disabled={!state.isRunning} className='btnA'>
        Pause
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })} className='btnA'>
        Reset
      </button>
      <button onClick={() => setShowModal(true)} className='btnA'>
        Open Portal Modal+++
      </button>
      <div className="App"> 
          <p> The id1 is {id1} </p> 
          <p>The id2 is {id2}</p> 
      </div> 

      


      {showModal && (
        <Portal>
          <div style={{
            position: 'fixed',
            width: '80%',
            margin: 'auto',
            top: '40%',
            left: '10%',            
            background: 'red',
            opacity:'95%',            
            padding: 20,
            border: '1px solid #ccc',
            zIndex: 1000
          }}>
            <h2>This is a Portal Modal</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Portal>
      )}
    </div>
  );
}
