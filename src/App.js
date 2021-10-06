import { useState, useRef, useEffect } from 'react';
import Navbar from "./Navbar";
import Form from './Form';
import Step1 from './Step1';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


function App() {

  // DISPATCH -> Execute the action, dispatch this action to the reducer
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Step1 />
        <Form />
        {/* <div>Counter = { counter }</div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
