import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInSide from './components/Login/Login';
import Student from './components/Student/Layout/StudentLayout';
import {Loginc} from './components/Login/Loginc';
import AddUser from './components/Login/Loginc'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SignInSide} />
          <Route  path="/dashboard" component={Student} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
