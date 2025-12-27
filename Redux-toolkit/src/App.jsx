import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, resetNumber } from './Redux/features/counterSlice'
const App = () => {
  const [num, setNum] = useState(0)
  const dispatch = useDispatch()
  const counter = useSelector(store => store.counter.value)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(resetNumber())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>Increment by amount </button>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
    </div>
  )
}

export default App