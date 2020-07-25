export function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return { ...state, count1: state.count1 + 1 }
        case 'increment2':
            return { ...state, count1: state.count1 + 2 }
        case 'set1':
            return { ...state, count1: action.count }
        case 'decrement1':
            return { ...state, count2: state.count2 - 1 }
        case 'decrement2':
            return { ...state, count2: state.count2 - 2 }
        case 'set2':
            return {  ...state, count2: action.count }
        default:
            throw new Error('Invalid Value')
    }
}