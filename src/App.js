import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from "./components/auth/login";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./components/auth/signup";
import Landing from "./components/layout/landing"
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
function App() {
  return (
    <div className="App">
        <AlertProvider  template={AlertTemplate} {...options}>
        <Router>
        <Switch>
          <Route exact path ="/" component={SignIn}/>
          <Route  path="/admin" component={Landing} />
        </Switch>
      </Router>
        </AlertProvider >
    </div>
  );
}

export default App;
