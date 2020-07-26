import * as actionTypes from '../actions'

const initialState = {
    counter: 0,
    name: '',
    surname: '',
}

const reducer = ( state = initialState, action ) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
                surname: state.surname = 'Khoje'
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value,
                name: state.name = 'Amey'
            }
    }
    return state;
}

export default reducer