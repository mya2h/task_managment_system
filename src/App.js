import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from "./components/auth/login";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./components/auth/signup";
import Landing from "./components/layout/landing"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ="/" component={SignIn}/>
          <Route  path="/admin" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
