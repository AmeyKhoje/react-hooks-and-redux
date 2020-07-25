export function calculatorReducer(state, action) {
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + parseInt(action.amount) }
        case 'decrement':
            return { ...state, count: state.count - parseInt(action.amount) }
        case 'multiply':
            return { ...state, count: state.count * parseInt(action.amount) }
        case 'divide':
            return { ...state, count: state.count / parseInt(action.amount) }
        case 'mod':
            return { ...state, count: state.count % parseInt(action.amount) }
        default:
            throw new Error('False Value')
    }
}