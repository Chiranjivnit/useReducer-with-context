import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state

  }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider
      value={{
        countState: count,
        countDispatch: dispatch
      }}>
      <div className="App">
        <header className="App-header">
          Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </header>
      </div>
    </CountContext.Provider>

  );
}

export default App;


// So our goal is to maintain a global state count So we will take one state for every components and 
// update that globalState dynamicaly using usereducer and contextApi from different component.

// like in app.js we will setour GlobalState.
// Then change that Global state from different components like , we will change globalState in ComponentA, ConmponentD, ComponentF
// using Context and useReducer().

// Follow the flow.

// From this App.js component we r not dipatching any actions .
// we will dipatch actions from nested components and in App.js, the state value will change.

// so for the above requirements we have to use context.

// STEPS TO USE CONTEXT API IN OUR COMPONENT

// Add context outSide the function (above the function like line no. 7 ) 
// wrap all the components import inside app.js with that context.
// Lets See
