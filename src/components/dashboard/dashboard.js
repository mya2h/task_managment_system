import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {Button,Typography ,Grid,Paper,CardHeader  } from '@material-ui/core';
import TaskList from './table'
const useStyles = makeStyles({
    root:{
        margin:12
    },
   paper:{
     height:"120px", 
    //  margin:"10px"
   },
   title:{
    float:"left"
   },
   card:{
    marginTop:"10px",
   },
   heading:{
       float:'left'
   },
   table:{
       marginTop:20
   }
  });
const Dashboard = ()=>{
    const classes = useStyles()
    return(
        <div className={classes.root}>
    <Button style={{float:"right"}} variant="contained" size="medium" color="primary"  startIcon={<AddIcon />} >
          New Ticket
        </Button>
        <br/>
        <br/>
        <Typography variant="h4" gutterBottom className={classes.title}>
       Dashboard
      </Typography>
        <Grid container spacing={1} >
        <Grid item xs={3} >
          <Paper className={classes.paper}>Total Tickets
          <br/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Open Tickets</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>In Progress</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>New Tickets</Paper>
        </Grid>
            </Grid>
        <div className={classes.table}>
        <TaskList/>
        </div>
        </div>
    )
}
export default Dashboard