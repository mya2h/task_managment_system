import React, { useEffect, forwardRef, useState } from 'react'
import { Button, Card, Grid, Paper, CardHeader } from '@material-ui/core';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import BlockIcon from '@material-ui/icons/Block';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import { useHistory } from 'react-router'
import axios from 'axios'
import { useAlert } from 'react-alert'
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'
import { getImprtedTickets, getUsers } from '../../../actions/API'
const tableIcons = {
  Check: forwardRef((props, ref) => <Check style={{
    color: '#2b94b1'
  }} {...props} ref={ref} />),
  Block: forwardRef((props, ref) => <BlockIcon style={{
    color: '#156c94'
  }} {...props} ref={ref} />),

  Delete: forwardRef((props, ref) => <Delete style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear style={{
    color: '#e64f47',
  }} {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit style={{
    color: '#5a98d6',
  }} {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const useStyles = makeStyles(theme => ({
  inable: {
    background: "blue",
    '&:hover': {
      background: "#2491c4",
    },
    color: "#fff"
  },
  disable: {
    backgroundColor: 'rgba(177, 171, 171, 0.26)'
  },
  detailPage:{
    marginLeft:theme.spacing(10),
    marginRight:theme.spacing(10),
    marginTop:theme.spacing(5),
    marginBottom:theme.spacing(5),
    fontSize:16
  },
  formControl:{
    width:"70%"
  }
}));
const ImportedTickets = () => {
  const alert = useAlert()
  const history = useHistory()
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      { title: 'Class', field: 'class' },
      { title: 'Director', field: 'director' },
      { title: 'Description', field: 'description' },
      { title: 'Status', field: 'status' },
      { title: 'Project Type', field: 'projectType' },
    ],
  })
  const [data, setData] = useState([])
  const [user,setUser] = useState([])
  const [ticketStatus,setStatus] = useState('')
  useEffect(async () => {
    const val = await getImprtedTickets()
    const userVal = await getUsers()
    console.log(userVal)
    setData(val)
    setUser(userVal)
  }, [])

const handleChange = async(event,id) => {
  setStatus(event.target.value)
  if(event.target.value == "progress"){
    const value = {
      ticketId: id,
      status: "inprogress"
    }
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ticket-token')
      }
    }
    try {
      const res = await axios.put(process.env.REACT_APP_API_URL + "/ticket", body, config)
      console.log(res.data)
      alert.success('ticket added to progress',{
        timeout:2000
      })
      history.push('/temp');
      history.goBack();
    }
    catch (err) {
      console.log(err.response)
      alert.success(err.response.data.error,{
        timeout:2000
      })
    }
  }
  if(event.target.value == "close"){
    const value = {
      ticketId: id,
      status: "closed"
    }
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('ticket-token')
      }
    }
    try {
      const res = await axios.put(process.env.REACT_APP_API_URL + "/ticket", body, config)
      console.log(res.data)
      alert.success('ticket closed',{
        timeout:2000
      })
      history.push('/temp');
      history.goBack();
    
    }
    catch (err) {
      console.log(err.response)
      alert.success(err.response.data.error,{
        timeout:2000
      })
    }
  }
};
const handleUser = async(e,id)=>{
  const value = {
    ticketId: id,
    userId: e.target.value._id
  }
  const body = JSON.stringify(value)
  console.log(body)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('ticket-token')
    }
  }
  try {
    const res = await axios.post(process.env.REACT_APP_API_URL + "/ticket/assign", body, config)
    console.log(res.data)
    alert.success(`ticket assigned to email${e.target.value.email}`,{
      timeout:3000
    })
    history.push('/temp');
    history.goBack();
  
  }
  catch (err) {
    console.log(err.response)
    alert.success(err.response.data.error,{
      timeout:3000
    })
  }
}
return (
  <div>
              
  <MaterialTable
    title="Imported Tickets"
    icons={tableIcons}
    columns={state.columns}
    data={data}
    detailPanel={rowData => {
      return (
       <div className={classes.detailPage}>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={6}>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Change Ticket Status</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          onChange={(e)=>handleChange(e,rowData._id)}
        >
          <MenuItem value='progress'>Progress</MenuItem>
          <MenuItem value='close'>Close</MenuItem>
        </Select>
      </FormControl>
          </Grid>
          <Grid item xs={6}>
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Assign User</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          onChange={(e)=>handleUser(e,rowData._id)}
        >
          {
            user.map(data=>(
              <MenuItem value={data}>{data.email}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
          </Grid>
        <Grid item xs={6}>
        Class: {rowData.class}
        <br/>
           Director:{rowData.director}
           <br/>
           Project Type:{rowData.projectType}
           <br/>
           Year:{rowData.year}

        </Grid>
        <Grid item xs={6}>
        Leader:{rowData.leader}
        <br/>
           Base Camp:{rowData.baseCamp}
           <br/>
           Project Link:{rowData.projectLink}
           <br/>
           Description:{rowData.description}
        </Grid>

         </Grid>
       </div>
      )
    }}
   
  />
    </div>
)
  }
export default ImportedTickets