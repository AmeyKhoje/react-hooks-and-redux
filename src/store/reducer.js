const initialState = {
    counter: 0,
    name: '',
    surname: '',
    results: []
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
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(),value:state.counter})
            }
    }
    return state;
}

export default reducer