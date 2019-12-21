import React, { useContext } from 'react';
import { CountContext } from '../App';


const ComponentA = () => {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h1>ComponentA {countContext.countState}</h1>
            <button onClick={() => countContext.countDispatch('increment')}>INCREMENT</button>
            <button onClick={() => countContext.countDispatch('decrement')}>DRECEMENT</button>
            <button onClick={() => countContext.countDispatch('reset')}>RESET</button>
        </div>
    )
}

export default ComponentA;

// Steps
// import CountContext from app.js and useContext from react.
// call CountContext inside the useContext
// then assign useContext into a variable like line no. 7.
//lets render the global state value in individual component.
