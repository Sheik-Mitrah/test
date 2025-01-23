import React, { useMemo, useRef, useState } from 'react'
import { useEffect } from "react"

const Home = ({ state, setState }) => {

    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();

        const interval = setInterval(() => { setState(p => p + 1) }, 1000 * 3)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />;

            Home
            {state}
    
        </div>
    )
}

export default Home