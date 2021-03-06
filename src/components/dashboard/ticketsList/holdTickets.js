import React,{useEffect,forwardRef,useState} from 'react'
import {Button,Card,Grid,Paper,CardHeader  } from '@material-ui/core';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import BlockIcon from '@material-ui/icons/Block';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import Check from '@material-ui/icons/Check';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Delete from '@material-ui/icons/Delete'

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
const HoldTickets = () => {
    
    const [state,setState] = useState({
        columns:[
            { title: 'Class', field: 'class' },
            { title: 'Director', field: 'dir'},
            { title: 'Description', field: 'description' },
            { title: 'Date', field: 'date'},
            { title: 'Type', field: 'type' },
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
    return (
      <MaterialTable
        title="Tickets On Hold"
        icons={tableIcons}
        columns={state.columns}
        data={state.data}        
        actions={[
          {
            icon: ()=><Button variant="outlined" color="primary" >Progress</Button>,
            tooltip: 'In progress',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          },
          {
            icon: ()=><Button variant="outlined" color="secondary">Done</Button>,
            tooltip: 'Delete User',
            onClick: (event, rowData) => alert("You want to delete " + rowData.name)
          }
        ]}
      />
    )
  }
export default HoldTickets