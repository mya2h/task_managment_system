import React, { useState } from 'react';
import { TextField,Grid,Button,FormControlLabel,Checkbox,Paper } from '@material-ui/core';
import image from '../../assets/images/admin.png'
import {Redirect} from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import {authenticate} from '../../actions/API'
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: '12%',
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingBottom: theme.spacing(9),
    width: '37%',
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

      </Paper>
    </div>
  );
}

export default ChangePassword