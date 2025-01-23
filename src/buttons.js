import {useDispatch} from 'react-redux'
import { decrement, getUserDetails, increment } from './service/actions'

export const Buttons = ()=>{
    const dispatch = useDispatch()

    const handleIncrement = ()=>{
    dispatch(increment(5))
    }

    const handleDecrement= () =>{
        dispatch(decrement(1))
    }

    const handleLogin = () =>{
        dispatch(getUserDetails({
            userName:'raju',
            password:12345
        }))
    }

    return (
        <>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleLogin}>login</button>
        </>
    )
}