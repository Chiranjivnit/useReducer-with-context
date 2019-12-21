import React, { useContext } from 'react';
import { CountContext } from '../App';

const ComponentF = () => {

    const countContextF = useContext(CountContext)

    return (
        <div>
            <h1>Component F {countContextF.countState}</h1>
            <h2>Component F child of ComponentE</h2>
            <button onClick={() => countContextF.countDispatch('increment')} >Increment</button>
            <button onClick={() => countContextF.countDispatch('decrement')} >Decrement</button>
            <button onClick={() => countContextF.countDispatch('reset')} >reset</button>
        </div>
    )
}

export default ComponentF;

// Follow the steps written inside ComponentA.