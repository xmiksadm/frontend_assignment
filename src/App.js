import Navbar from "./components/Navbar";
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
// import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  // const count = useSelector((state) => state.counter)
  // const type = useSelector((state) => state.donateType)
  // DISPATCH -> Execute the action, dispatch this action to the reducer
  // const dispatch = useDispatch();

  // action creators
  // const AC = bindActionCreators(actionCreators, dispatch)
  // const { increment, decrement, typeAll, typeOne } = bindActionCreators(actionCreators, dispatch)

  return (
    <Router>
      <div>
        <Navbar />
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
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
