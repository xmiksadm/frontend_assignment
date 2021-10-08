import Navbar from "./Navbar";
import Slider from "./components/Slider"
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Footer from './Footer';
import NotFound from './NotFound';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  // DISPATCH -> Execute the action, dispatch this action to the reducer
  // const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Navbar />
        <Slider />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <First />
            </Route>
            <Route path="/form">
              <Second />
            </Route>
            <Route path="/confirm">
              <Third />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <div>Counter = { counter }</div>
          <button onClick={() => dispatch(increment(2))}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
