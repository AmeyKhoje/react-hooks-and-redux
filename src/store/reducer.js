import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    name: '',
    surname: '',
    results: []
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
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value:state.counter})
            }
        case actionTypes.DELETE_RESULT:
            //This is one implementation in which we return newArray finally
            // const id = 2;
            // const newArray = [...state.results]  //here we copy prev array to newArray to update it immutably
            // newArray.splice(id, 1) //.splice(index, no. of items we want to remove) => syntax of splice

            //We sill see another way now using filter
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer