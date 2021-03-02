import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button, Dialog, DialogTitle, Typography, Grid, Paper, CardHeader } from '@material-ui/core';
import {BrowserRouter as Router,Switch,Redirect,Route,} from "react-router-dom";
import ALLTickets from './ticketsList/allTicktes'
import ClosedTickets from './ticketsList/closedTickets'
import ClosedTodayTickets from './ticketsList/closedToday'
import HoldTickets from './ticketsList/holdTickets'
import NewTickets from './ticketsList/newTickets'
import OpenedTodayTickets from './ticketsList/openedToday'
import ProgressTickets from './ticketsList/progressTickets'
import ThreeDaysPassesTickets from './ticketsList/threeDaysOld'
import Cards from './cards'
const useStyles = makeStyles({
  root: {
    margin: 12
  },
  modal:{
    minHeight:"690px"
  },
  paper: {
    height: "120px",
    //  margin:"10px"
  },
  title: {
    float: "left"
  },
  card: {
    marginTop: "10px",
  },
  heading: {
    float: 'left'
  },
  table: {
    marginTop: 20
  }
});
const Dashboard = () => {
  const switchRoutes = (
    <Switch>
    <Route exact path="/admin/Tickets/allTickets" component={ALLTickets} />
   <Route exact path="/admin/Tickets/newTickets" component={NewTickets} />
   <Route exact path="/admin/Tickets/ticketsInProgress" component={ProgressTickets} />
   <Route exact path="/admin/Tickets/holdTickets" component={HoldTickets} />
   <Route exact path="/admin/Tickets/closedTickets" component={ClosedTickets} />
   <Route exact path="/admin/Tickets/threeeDaysOldTickets" component={ThreeDaysPassesTickets} />
   <Route exact path="/admin/Tickets/openedTodayTickets" component={OpenedTodayTickets} />
   <Route exact path="/admin/Tickets/closedTodayTickets" component={ClosedTodayTickets} />
   <Redirect from = "/admin/Tickets" to = "/admin/Tickets/allTickets"/>
  </Switch>
  )
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => {
    setOpen(true)
  };
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Cards/>
      <div className={classes.table}>
      {switchRoutes}
      </div>
    </div>
  )
}
export default Dashboard