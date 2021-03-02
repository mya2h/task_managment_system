import React, { useState } from 'react';
import { TextField,Grid,Button,FormControlLabel,Checkbox,Paper } from '@material-ui/core';
import image from '../../assets/images/admin.png'
import {Redirect} from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import {authenticate} from '../../actions/API'
const useStyles = makeStyles(theme => ({
  main: {
    // backgroundColor: '#1A2038',
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    margin:theme.spacing(2)
  },
  all: {
    margin: theme.spacing(4)
  },
 
  clear: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    backgroundColor: '#1A2038',
    '&:hover': {
      background: "rgb(87, 95, 126)",
    },
  },
  label: {
    margin: theme.spacing(2),
    color: '#1A2038',
    fontWeight: 'bold',
    fontSize: 30
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1),
    background: "#1976d2",
    '&:hover': {
        background: "#447fb9",
    },
  },
}));

const ChangePassword = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const classes = useStyles();
  const [value, setValue] = React.useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   authenticate(value)
    // setIsAuthenticated(true)
    console.log(value)
  }
  if(isAuthenticated){
    return(
      <Redirect to="/admin"/>
    )
  }
  return (
    <div className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="currentPassword"
                label="Current Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                onChange={handleChange}
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
                  Change
          </Button>
              {/* </Link> */}

            </form>
          </Grid>
        </Grid>
    </div>
  );
}

export default ChangePassword