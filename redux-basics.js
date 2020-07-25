const redux = require('redux');
// import { composeWithDevTools } from 'remote-redux-devtools'

const createStore = redux.createStore

const initialState = {
    counter: 0
}

//Reducer
//performs tasks based on actions

const rootReducer = (state = initialState, action) => {   //Whenever state is undefined it will take 'initial state'
    if(action.type === 'INC_COUNTER') {  //hre actions performed that specified in dispatch method
        return {
            ...state,  //do not update state directly update with copying prev state like this one
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state
}

//Store

const store = createStore(rootReducer); // store created for rootReducer(reducer)
console.log(store.getState());


// console.log(store.getState());

//subcribe   
//function stakes an argument and executed whenever state is updated
//should get executed after store created so we can know about future store dispatches

store.subscribe(() => {
    console.log('Subscription called..', store.getState());
})

//dispatching actions

store.dispatch({type: 'INC_COUNTER'}) //type of action which should be performed
store.dispatch({type: 'ADD_COUNTER', value: 10}) //value is extra thing or values we can send through dispatch. it can be payload also

console.log(store.getState());


