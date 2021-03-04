import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField,Grid,IconButton, Dialog, DialogTitle,Typography,Paper } from '@material-ui/core';
import {Telegram} from '@material-ui/icons'
import Notifications, { notify } from 'react-notify-toast';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
import {register} from '../../actions/API'
import ChangePassword from './changePassword'
import { useAlert } from 'react-alert'
const useStyles = makeStyles(theme => ({
  main: {
    margin:theme.spacing(3)
  },
  all: {
    margin: theme.spacing(4)
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7)
    // marginLeft:theme.spacing(4)
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(10)
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

const SignUp = () => {
  const alert = useAlert()
  const classes = useStyles();
  const [value, setValue] = React.useState('')
  const [user, setUser] = React.useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    console.log(event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  };
  const handelRadioChange = (event) => {
    setUser({ ...user, roleType: event.target.value })
    setValue(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    const body = JSON.stringify(user)
    console.log(localStorage.getItem('ticket-token'))
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('ticket-token')
        }
    }
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL+"/user", body, config)
        alert.success('new user added',{
          timeout:2000
        })
    }
    catch (err) {
      if(err.response){
        alert.error(err.response.data.error,{
          timeout:2000
        })
      }
    }
    setUser({
      fullName: '',
      email: '',
      password: ''
    })
    
  }
  const clearData = () => {
    setUser({
      fullName: '',
      email: '',
      password: '',
    })
    setValue('')
  }
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => {
    setOpen(true)
  };
  return (
    <div className={classes.main}>
        <Button onClick={handleOpen} style={{ float: "right" }} variant="contained" size="medium" color="primary">
        Change Password
        </Button>
        <br/>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.label}>
          Register User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                value = {user.fullName}
                required
                fullWidth
                id="fullName"
                label="Full Name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                type="email" 
                label="Email Address"
                value = {user.email}
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                pattern=".{5,15}"
                value = {user.password}
                type="password"
                id="password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <Telegram /> Register
          </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.clear}
                onClick={clearData}
              >
                <Telegram /> Clear
          </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Dialog onClose={handleClose} className={classes.modal} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Change Password
        <IconButton onClick={handleClose} style={{float:'right'}} className={classes.dialogTitle}>
            <CloseIcon />
        </IconButton>
        </DialogTitle>
        <ChangePassword/>
    </Dialog>
    </div>

  );
}

export default SignUp
