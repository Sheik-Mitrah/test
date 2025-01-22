import React, { useEffect, useMemo, useState } from 'react'
import Home from './Home'

const App = () => {
  const [state, setState] = useState(10)
  const [dummy, setDummy] = useState(10)
  const [show, setShow] = useState(false)

  const expen = useMemo(() => {
    fo
    return dummy + 1
  }, [dummy])

  let data = 10
  const update = () => {
    data = 11
    setState(p => p + 1)
  }

  useEffect(() => {

    console.log('Effect');

  }, [])

  return (
    <div>
      <button onClick={update}>update </button>
      <div>
        <button onClick={() => { setDummy(p => p + 1) }}>dummy update </button>
        dummy-{dummy}
        memo-{expen}
      </div>

      <div>

        data-{data}
      </div>
      <div>
        state-{state}
      </div>
      <div>
        <button onClick={e => setShow(p => !p)}>show </button>
        {show && <Home state={state} setState={setState} />}
      </div>


    </div>
  )
}

export default App