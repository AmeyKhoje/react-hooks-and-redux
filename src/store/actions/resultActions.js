import * as actionType from './actionsTypes'

//action creators for async redux flow

export const saveResult = (res) => {
    return {
        type: actionType.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {   // dispatching actions using setTimeout for async code  //getState is give us current state & this available from redux-thunk
        setTimeout(() => {
            console.log(getState());
            dispatch(saveResult(res))
        }, 2000)
    }
    
}

export const deleteResult = (resElID) => {
    return {
        type: actionType.DELETE_RESULT,
        resultElID: resElID
    }
}