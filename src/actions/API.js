import axios from 'axios'
import jwt_decode from "jwt-decode";
require('dotenv').config()


export const register = async (value) => {
    
    const body = JSON.stringify(value)
    console.log(localStorage.getItem('token'))
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL+"/user", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const authenticate = async (value) =>{   
    console.log(process.env.REACT_APP_API_URL)
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(process.env.API_URL)
        const res = await axios.post(process.env.REACT_APP_API_URL+"/user/signin", body, config)
        console.log(res.data)
        localStorage.setItem('token',res.data.token)
        var decoded = jwt_decode(res.data.token);
        localStorage.setItem('user',decoded._id)
        localStorage.setItem('userName',decoded.fullName)
    }
    catch (err) {
        // alert(err.response.data)
        console.log(err.response)
    }
}
export const changePassword = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL+"/user/account", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getUsers = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/user", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const addTicket = async (value) =>{
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(process.env.REACT_APP_API_URL+"/ticket", body, config)
        getTicket()
        newTicket()
        ticketProgress()
        ticketClosed()
        older3Day()
        openedToday()
        closedToday()
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getTicket = async () =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket", config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}
export const updateTicket = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.put(process.env.REACT_APP_API_URL+"/ticket", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}

export const newTicket = async () =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=open", config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}

export const ticketProgress = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=inprogress", config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}

export const ticketClosed = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=closed", config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}

export const older3Day = async (value) =>{
    const newDay =  new Date(Date.now());
    var today = newDay.toISOString(); 
    const olderDay = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) 
    olderDay.setUTCHours(0, 0, 0, 0); 
    const dateOlder = olderDay.toISOString()
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?ticketOpenedDateFrom="+dateOlder+"&ticketOpenedDateTo="+today, config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}

export const closedToday = async () =>{
    var dateobj = new Date(Date.now()); 
    dateobj.setUTCHours(0, 0, 0, 0); 
    var today = dateobj.toISOString(); 
    var lastDate = new Date(Date.now()); 
    var datelast = lastDate.toISOString()
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=closed&ticketClosedDateFrom="+today+"&ticketClosedDateTo="+datelast, config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}
export const openedToday = async () =>{
    var dateobj = new Date(Date.now()); 
    dateobj.setUTCHours(0, 0, 0, 0); 
    var today = dateobj.toISOString(); 
    var lastDate = new Date(Date.now()); 
    var datelast = lastDate.toISOString()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=open&ticketOpenedDateFrom="+today+"&ticketOpenedDateTo="+datelast, config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}
export const opened = async () =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/ticket?status=open", config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}
