import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button,IconButton, Dialog, DialogTitle, Typography, Grid, Paper, CardHeader } from '@material-ui/core';
import NewTicket from './addTicket'
import CloseIcon from '@material-ui/icons/Close';
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
  },
  dialogTitle:{
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center'
}
});
const Cards = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
  };
  const handleOpen = () => {
    setOpen(true)
  };
  const classes = useStyles()
  return (
    <div>
      <Button onClick={handleOpen} style={{ float: "right" }} variant="contained" size="medium" color="primary" startIcon={<AddIcon />} >
        New Ticket
        </Button>
      <br />
      <br />
      <Typography variant="h4" gutterBottom className={classes.title}>
        Dashboard
      </Typography>
      <Grid container spacing={1} >
        <Grid item xs={3} >
          <Paper className={classes.paper}>Total Tickets
          <br />
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
      <Dialog onClose={handleClose} className={classes.modal} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Add New Ticket
        <IconButton onClick={handleClose} style={{float:'right'}} className={classes.dialogTitle}>
            <CloseIcon />
        </IconButton>
        </DialogTitle>
    <NewTicket/>
    </Dialog>
    </div>
  )
}
export default Cards