export function reducer(state, action) {
    switch(action) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            throw new Error('Unexpected Token');
    }
}