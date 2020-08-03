import * as actionType from './actionsTypes'

//action creators for async redux flow

export const increment = () => {
    return {
        type: actionType.INCREMENT
    }
}

export const add = (value) => {
    return {
        type: actionType.ADD,
        value: value
    }
}