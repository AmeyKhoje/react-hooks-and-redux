const initialState = {
    counter: 0,
    name: '',
    surname: ''
}

const reducer = ( state = initialState, action ) => {

    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
                surname: state.surname = 'Khoje'
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value,
                name: state.name = 'Amey'
            }
    }
    return state;
}

export default reducer