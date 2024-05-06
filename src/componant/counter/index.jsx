import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../../store/slices/counterSlice'
import './style.css';
 function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div >
        <button
          className='btn2 my-5 mx-5'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className='btn2 my-5 mx-5'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


export default Counter;