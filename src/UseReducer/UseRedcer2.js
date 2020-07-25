import React, { useReducer } from 'react';
import { reducer } from '../reducers/reducertwo'

const UseRedcer2 = () => {
    const initialState = {
        count1: 0,
        count2: 0
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p>
                {state.count1}
            </p>
            <div>
                <button 
                    onClick = {() => dispatch({type: 'increment1'})} >
                    + 1
                </button>
                <button 
                    onClick = {() => dispatch({type: 'increment2'})} >
                    + 2
                </button>
                <button 
                    onClick = {() => dispatch({type: 'set1', count: 0})} >
                    set 1
                </button>
            </div>
            <p>
                {state.count2}
            </p>
            <div>
                <button 
                    onClick = {() => dispatch({type: 'decrement1'})} >
                    - 1
                </button>
                <button 
                    onClick = {() => dispatch({type: 'decrement2'})} >
                    - 2
                </button>
                <button 
                    onClick = {() => dispatch({type: 'set2', count: 0})} >
                    set 1
                </button>
            </div>
        </div>
    );
}

export default UseRedcer2;
