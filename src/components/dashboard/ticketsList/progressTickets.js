import React,{useEffect,forwardRef,useState} from 'react'
import {Button,Card,Grid,Paper,CardHeader  } from '@material-ui/core';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import BlockIcon from '@material-ui/icons/Block';
import { useHistory } from 'react-router'
import axios from 'axios'
import { useAlert } from 'react-alert'
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'
import {ticketProgress,updateTicket} from '../../../actions/API'
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
}));
const ProgressTickets = () => {
  const alert = useAlert()
  const history = useHistory()
  const classes = useStyles();
    const [state,setState] = useState({
      columns:[
        { title: 'Class', field: 'class' },
        { title: 'Director', field: 'director'},
        { title: 'Description', field: 'description' },
        { title: 'Date', field: 'createdAt'},
        { title: 'Project Type', field: 'projectType' },
    ],
        data:[
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        { class: '1000', description: 'describe', date: "12/05/20", type: "data",dir:"placeHolder" },
        ]
    })
    const [data,setData] = useState([])

    useEffect(async()=>{
     const val =  await ticketProgress()
     console.log(val)
     setData(val)
    },[])
    const handleDone = async(val)=> {
      const value = {
        ticketId: val._id,
        status: "closed"
      }
      const body = JSON.stringify(value)
      console.log(body)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      }
      try {
        const res = await axios.put(process.env.REACT_APP_API_URL + "/ticket", body, config)
        console.log(res.data)
        alert.success('ticket closed',{
          timeout:2000
        })
        history.push('/admin/Tickets/closedTickets');
      
      }
      catch (err) {
        console.log(err.response)
        alert.success(err.response.data.error,{
          timeout:2000
        })
      }
    }
    return (
      <MaterialTable
        title="Tickets In Progress"
        icons={tableIcons}
        columns={state.columns}
        data={data}        
        actions={[
          rowData => (
            {
              icon: () => <Button className={rowData.status == 'closed'
                ? classes.disable
                : classes.inable} >Close</Button>,
              tooltip: 'Delete User',
              onClick: (event, rowData) => handleDone(rowData),
              disabled: rowData.status == 'closed'
            })
        ]}
      />
    )
  }
export default ProgressTickets