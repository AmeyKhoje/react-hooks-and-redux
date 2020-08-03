import React, { useReducer } from 'react';
import { connect } from 'react-redux'  //connect is function that returns HOC
import { reducer } from '../reducers/reducerOne'
import * as actionCreators from '../store/actions/index'

const UseReducer1 = (props) => {
    const initialState = 0;

    const [count, dispatch] = useReducer(reducer, initialState);
    console.log(new Date());
    return (
        <div>
            <hr />
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
            <hr />
            <div>
                <button onClick={() => props.onStoreResult(props.ctr) }>Store Result</button>
            </div>
            <div>
                <ul>
                    {
                        props.storedResult.map(str => (
                        <li onClick={() => props.onDeleteResult(str.id)} key={str.id}>{str.value}</li>
                        ))
                    }
                    
                </ul>
            </div>
            <hr />
        </div>
    );
}

//helper functions

const mapStateToProps = state => {  //Maps the redux state to props of component
    return {
        ctr: state.ctr.counter,
        name: state.ctr.name,
        surname: state.ctr.surname,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch({type: 'INCREMENT'}),  //This is basic hardcoded type of action
        // onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }), //This all are outsourced action types from store/actions.js and same we will import in reducers.
        // onAdd: () => dispatch({ type: actionTypes.ADD, value: 10 }),
        // onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULTS, result: result }),
        // onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
        // these all are action creators for async functionality in redux
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onAdd: () => dispatch(actionCreators.add(10)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseReducer1); //arguments n connects are sent to this component as props