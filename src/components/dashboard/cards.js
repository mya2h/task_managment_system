import React,{useEffect,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button,IconButton, Dialog, DialogTitle, Typography, Grid, Paper, CardHeader } from '@material-ui/core';
import NewTicket from './addTicket'
import CloseIcon from '@material-ui/icons/Close';
import {getTicket,newTicket,ticketProgress,opened} from '../../actions/API'
import '../../assets/css/sideNav.css'
const useStyles = makeStyles({
  root: {
    margin: 12
  },
  modal:{
    minHeight:"690px"
  },
  paper: {
    paddingTop:"20px",
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
  const [total,setTotal] = useState(0)
  const [opent,setOpent] = useState(0)
  const [progress,setProgress] = useState(0)
  const [newt,setNew] = useState(0)
  useEffect(async()=>{
    const val = await getTicket()
    const newt = await newTicket()
    const prog = await ticketProgress()
    const op = await opened()
    if(op != null){
      setOpent(op.length)
    }
    if(prog != null){
      setProgress(prog.length)
    }
    if(newt!= null){
      setNew(newt.length)
    }
    if(val!= null){
      setTotal(val.length)
    } 
  },[])
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
        <Grid item xs={3}  >
          <Paper className="bg-c-blue"><Typography variant="h6" component="h6" gutterBottom>
     TOTAL TICKETS
      </Typography>
      <Typography variant="h4" component="h6" gutterBottom>
   {total}
      </Typography>
          <br />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="bg-c-green">
          <Typography variant="h6" component="h6" gutterBottom>
     OPEN TICKETS
      </Typography>
      <Typography variant="h4" component="h6" gutterBottom>
   {opent}
      </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="bg-c-yellow"><Typography variant="h6" component="h6" gutterBottom>
     IN PROGRESS
      </Typography>
      <Typography variant="h4" component="h6" gutterBottom>
   {progress}
      </Typography>
      </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="bg-c-pink">
            <Typography variant="h6" component="h6" gutterBottom>
    NEW TICKETS
      </Typography>
      <Typography variant="h4" component="h6" gutterBottom>
   {newt}
      </Typography>
      </Paper>
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