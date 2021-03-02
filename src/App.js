import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from "./components/auth/login";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./components/auth/signup";
import Landing from "./components/layout/landing"
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <div className="App">
        <Provider template={AlertTemplate} {...options}>
        <Router>
        <Switch>
          <Route exact path ="/" component={SignIn}/>
          <Route  path="/admin" component={Landing} />
        </Switch>
      </Router>
        </Provider>
    </div>
  );
}

export default App;
