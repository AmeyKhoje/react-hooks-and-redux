import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = ( state = initialState, action ) => {

    switch(action.type) {
        case actionTypes.STORE_RESULTS:
            return {
                ...state,
                results: state.results.concat({id: new Date(),value: action.result})
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