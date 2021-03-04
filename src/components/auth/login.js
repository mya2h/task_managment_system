import React, { useEffect, useState } from 'react';
import { TextField,Grid,Button,FormControlLabel,Checkbox,Paper } from '@material-ui/core';
import image from '../../assets/images/admin.png'
import { createBrowserHistory } from 'history';
import {Redirect,useHistory} from 'react-router-dom'
import axios from 'axios'
import { useAlert } from "react-alert";
import { makeStyles } from '@material-ui/core/styles';
import jwt_decode from "jwt-decode";
import {authenticate} from '../../actions/API'
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '12%',
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingBottom: theme.spacing(9),
    width: '50%',
    borderRadius: '15px'

  },
  logo: {
    width: '170px',
    height: '180px',
    marginTop: theme.spacing(7)
  },
  form: {
    width: '83%', // Fix IE 11 issue.
    marginLeft: '18%',
    marginTop: '3%',
  },
  submit: {
    marginRight: theme.spacing(22),
    background: "#1976d2",
        '&:hover': {
            background: "#447fb9",
        },
  },
  main: {
    backgroundColor: '#1A2038',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const SignIn = () => {
  const alert = useAlert()
  let history = useHistory();
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('ticket-token')){
      setIsAuthenticated(true)
    }
  })
  const classes = useStyles();
  const [value, setValue] = React.useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(process.env.API_URL)
        const res = await axios.post(process.env.REACT_APP_API_URL+"/user/signin", body, config)
        localStorage.setItem('ticket-token',res.data.token)
        var decoded = jwt_decode(res.data.token);
        localStorage.setItem('user',decoded._id)
        localStorage.setItem('role',decoded.role)
        console.log(decoded)
        localStorage.setItem('userName',decoded.fullName)
        setIsAuthenticated(true)
    }
    catch (err) {
      if(err.response){
        alert.error(err.response.data.error,{
          timeout:2000
        })
      }
    }

  }
  if(isAuthenticated){
    console.log("got it")
    history.push("/admin");
   
  }
  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={4}>
            <img src={image} alt="logo" className={classes.logo} />
          </Grid>
          <Grid item xs={8}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Name"
                name="email"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                style={{ marginRight: '50px' }}
              />
              <br />
              {/* <Link to="/admin" style={{ color: 'inherit', textDecoration: 'inherit' }}> */}
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
          </Button>
              {/* </Link> */}

            </form>
          </Grid>
        </Grid>

      </Paper>
    </div>
  );
}

export default SignIn