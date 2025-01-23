import { useSelector } from "react-redux"

export const DisplayState = ()=>{
    const counterValue = useSelector(state => state.counter)
    const userData = useSelector(state => state.user)
    console.log("counterValue",counterValue,userData)
    return (
        <>
        <p>{counterValue}</p>
        <p>
            {JSON.stringify(userData,null,2)}
        </p>
        </>
    )
}