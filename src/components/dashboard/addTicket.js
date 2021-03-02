import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Grid, FormHelperText, FormControl, InputLabel, MenuItem, Select, Paper } from '@material-ui/core';
import { CodeSharp, Telegram } from '@material-ui/icons'
import Notifications, {notify} from 'react-notify-toast';
import { makeStyles } from '@material-ui/core/styles';
import {addTicket} from '../../actions/API'
import { store } from 'react-notifications-component';
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
        marginBottom: theme.spacing(1)
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
    const userId = localStorage.getItem('user')
    const [value, setValue] = React.useState('')
    const [ticket, setticket] = React.useState({
        class: '',
        director: '',
        projectType: '',
        year: '',
        leader: '',
        baseCamp: '',
        projectLink: '',
        description:'',
        assignedTo:userId
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        setticket({ ...ticket, [event.target.name]: event.target.value })
    };
    const handelRadioChange = (event) => {
        setticket({ ...ticket, year: event.target.value })
        setValue(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTicket(ticket)
        setticket({
            class: '',
            director: '',
            projectType: '',
            year: '',
            projectLink: '',
            leader: '',
            baseCamp: '',
            description:'',
            assignedTo:userId         
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
                                name="class"
                                value={ticket.class}
                                required
                                fullWidth
                                id="class"
                                label="Class"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="director"
                                label="Director"
                                value={ticket.director}
                                name="director"
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
                                    value={ticket.projectType}
                                    inputProps={{
                                        name: 'projectType',
                                        id: 'age-native-simple',
                                      }}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={'demo'}>Demo</MenuItem>
                                    <MenuItem value={'specialProject'}>Special Project</MenuItem>
                                    <MenuItem value={'marker'}>Marker</MenuItem>
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
                                    value={ticket.year}
                                    inputProps={{
                                        name: 'year',
                                        id: 'age-native-simple',
                                      }}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value={'1232'}>1232</MenuItem>
                                    <MenuItem value={'1930'}>1930</MenuItem>
                                    <MenuItem value={'2020'}>2020</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="leader"
                                label="Leader"
                                pattern=".{5,15}"
                                value={ticket.leader}
                                id="leader"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="baseCamp"
                                label="Base Camp"
                                value={ticket.baseCamp}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="projectLink"
                                label="Project Link"
                                value={ticket.projectLink}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="description"
                                label="Description"
                                value={ticket.description}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                <Telegram /> Add
          </Button>
                </form>
            </Paper>
        </div>

    );
}

export default NewTicket
