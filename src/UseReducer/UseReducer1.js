import React, { useReducer } from 'react';
import { connect } from 'react-redux'  //connect is function that returns HOC
import { reducer } from '../reducers/reducerOne'

const UseReducer1 = (props) => {
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            {count}
            <button
                onClick = {() => dispatch('INC')}>
                +1
            </button>
            <button
                onClick = {() => dispatch('DEC')}>
                -1s
            </button>
            <button
                onClick = {() => dispatch('RESET')}>
                Reset
            </button>
            <div>
                <p>Redux state: {props.ctr}</p>
                <p>Name in redux: {props.name} {props.surname}</p>
            </div>
            <div>
                <button onClick={props.onIncrementCounter}>Add using redux</button>
            </div>
            <div>
                <button onClick={props.onAdd}>Add 10 using redux</button>
            </div>
        </div>
    );
}

//helper functions

const mapStateToProps = state => {  //Maps the redux state to props of component
    return {
        ctr: state.counter,
        name: state.name,
        surname: state.surname
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onAdd: () => dispatch({ type: 'ADD', value: 10 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseReducer1); //arguments n connects are sent to this component as props
