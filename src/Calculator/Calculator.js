import React, { useState, useReducer } from 'react';
import { calculatorReducer } from '../reducers/calculatorReducer';

const Calculator = () => {
    const [ initState, setInitState ] = useState({
        count: 0,
        amount: 0,
    })

    const initialState = {
        count: 0,
        amount: 0
    }

    const [state, dispatch] = useReducer(calculatorReducer, initState)

    const amountChangeHandler = (e) => {
        setInitState({
            ...initState,
            amount: e.target.value
        })

        
    }
    console.log(initialState);
    const addHandler = () => {
        dispatch({
            type: 'increment'
        })
        console.log(initState.count);
    }
    return (
        <div>
            {state.count}
            <input type="number" value={initState.amount} name="number" onChange={amountChangeHandler} />
            <button onClick={() => dispatch({type: 'increment', amount: initState.amount})}>
                Add
            </button>
            <button onClick={() => dispatch({type: 'decrement', amount: initState.amount})}>
                Substract
            </button>
            <button onClick={() => dispatch({type: 'multiply', amount: initState.amount})}>
                Multiply
            </button>
            <button onClick={() => dispatch({type: 'divide', amount: initState.amount})}>
                Divide
            </button>
            <button onClick={() => dispatch({type: 'mod', amount: initState.amount})}>
                Mod
            </button>
        </div>
    );
}

export default Calculator;
