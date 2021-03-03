import axios from 'axios'
import Notifications, {notify} from 'react-notify-toast';
import jwt_decode from "jwt-decode";
import {BrowserRouter as Router,Switch,Redirect,Route,} from "react-router-dom";
import React, { Fragment } from "react";
import { store } from 'react-notifications-component';
import { useHistory } from "react-router-dom";
require('dotenv').config()
const baseUrl = "http://localhost:4000/api"

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
        const res = await axios.post(baseUrl+"/user", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const authenticate = async (value) =>{   
    console.log(baseUrl)
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        console.log(process.env.API_URL)
        const res = await axios.post(baseUrl+"/user/signin", body, config)
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
        const res = await axios.post(baseUrl+"/user/account", body, config)
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
        const res = await axios.get(baseUrl+"/user", body, config)
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
        const res = await axios.post(baseUrl+"/ticket", body, config)
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
        const res = await axios.get(baseUrl+"/ticket", config)
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
        const res = await axios.put(baseUrl+"/ticket", body, config)
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
        const res = await axios.get(baseUrl+"/ticket?status=open", config)
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
        const res = await axios.get(baseUrl+"/ticket?status=inprogress", config)
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
        const res = await axios.get(baseUrl+"/ticket?status=closed", config)
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
        const res = await axios.get(baseUrl+"/ticket?ticketOpenedDateFrom="+dateOlder+"&ticketOpenedDateTo="+today, config)
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
        const res = await axios.get(baseUrl+"/ticket?status=closed&ticketClosedDateFrom="+today+"&ticketClosedDateTo="+datelast, config)
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
        const res = await axios.get(baseUrl+"/ticket?ticketOpenedDateFrom="+today+"&ticketOpenedDateTo="+datelast, config)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log(err.response)
    }
}

