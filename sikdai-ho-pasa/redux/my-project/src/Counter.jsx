import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './store/counterSlice';


const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

 function onIncrease() {
        dispatch(increment())
    }
 function onDecrease() {
        dispatch(decrement())
    }
  return (
    <div>
        <div>
            <h2>Counter App</h2>
            <h1>{count}</h1>
            <button onClick={onIncrease}>Increment</button>
            <button onClick={onDecrease}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter