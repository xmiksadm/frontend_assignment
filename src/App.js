import { useState, useRef, useEffect } from 'react';
import Navbar from "./Navbar";
import Form from './Form';
import Step1 from './Step1';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

// const LOCAL_STORAGE_KEY = "some_key";

function App() {
  // const counter = useSelector(state => state.counter);

  // DISPATCH -> Execute the action, dispatch this action to the reducer
  // const dispatch = useDispatch();

  // for saving in local storage
 /*  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedNames) setNames();
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(names))
  }, [names]) */


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Step1 />
        <Form />
        <br/>

        {/* <div>Counter = { counter }</div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
      </div>
    </div>
  );
}

export default App;
