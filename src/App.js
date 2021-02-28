import logo from './logo.svg';
import './App.css';
import SignIn from "./components/auth/login";
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SignUp from "./components/auth/signup";
function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
