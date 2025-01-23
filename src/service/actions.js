import { DECREMENT, INCREMENT, LOGIN } from "./actionTypes"

export const increment = (data)=>{
    return {
        type:INCREMENT,
        payload:data
    }
}

export const decrement = (data)=>{
    return {
        type:DECREMENT,
        payload:data
    }
}

export const getUserDetails = (data)=>{
    return {
        type:LOGIN,
        payload:data
    }
}