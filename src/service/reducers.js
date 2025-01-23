import { DECREMENT, INCREMENT, LOGIN } from "./actionTypes"

const intitalState = {
    counter: 0,
    user: {}
}

export const reducer = (state = intitalState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        case DECREMENT: {
            return {
                ...state,
                counter: state.counter - action.payload
            }
        }
        case LOGIN: {
            return {
                ...state,
                counter: state.counter + 1,
                user: action.payload
            }
        }
        default: {
            return state
        }
    }
}