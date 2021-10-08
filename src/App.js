import { useState, useRef, useEffect } from 'react';
import Navbar from "./Navbar";
import Slider from "./components/Slider"
import Second from './pages/Second';
import First from './pages/First';
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
        <Slider />
        <First />
        {/* <Second /> */}
        {/* <div>Counter = { counter }</div>
        <button onClick={() => dispatch(increment(2))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
