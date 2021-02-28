import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Grid, FormHelperText, FormControl, InputLabel, MenuItem, Select, Paper } from '@material-ui/core';
import { Telegram } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    all: {
        margin: theme.spacing(4)
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    formControl:{
        width:"100%"
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

const NewTicket = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('')
    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        userName: '',
        roleType: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        setUser({ ...user, [event.target.name]: event.target.value })
    };
    const handelRadioChange = (event) => {
        setUser({ ...user, roleType: event.target.value })
        setValue(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        setUser({
            firstName: '',
            lastName: '',
            userName: '',
            roleType: '',
            email: '',
            password: '',
            confirm_password: ''
        })
        setValue('')
    }
    const clearData = () => {
        setUser({
            firstName: '',
            lastName: '',
            userName: '',
            roleType: '',
            email: '',
            password: '',
            confirm_password: ''
        })
        setValue('')
    }
    return (
        <div >
            <Paper className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                value={user.firstName}
                                required
                                fullWidth
                                id="firstName"
                                label="Class"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Director"
                                value={user.lastName}
                                name="lastName"
                                autoComplete="lname"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                    Project Type
        </InputLabel>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    label="d;fkl"
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={10}>Demo</MenuItem>
                                    <MenuItem value={20}>Special Project</MenuItem>
                                    <MenuItem value={30}>Marker</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                    Year
        </InputLabel>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    label="d;fkl"
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={10}>1232</MenuItem>
                                    <MenuItem value={20}>1930</MenuItem>
                                    <MenuItem value={30}>2020</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Leader"
                                pattern=".{5,15}"
                                value={user.password}
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirm_password"
                                label="Project Link"
                                value={user.confirm_password}
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirm_password"
                                label="Base Camp"
                                value={user.confirm_password}
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirm_password"
                                label="Project Link"
                                value={user.confirm_password}
                                id="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                <Telegram /> Register
          </Button>
                        </Grid> */}
                        {/* <Grid item xs={2}>
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
                        </Grid> */}
                    </Grid>
                </form>
            </Paper>
        </div>

    );
}

export default NewTicket
