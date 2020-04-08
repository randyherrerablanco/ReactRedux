const Initial_STATE = {
    counter: 0
}

export function counterApp(state = Initial_STATE, action) {
    console.log(state, action)
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}