import axios from 'axios'
import Notifications, {notify} from 'react-notify-toast';
import jwt_decode from "jwt-decode";
import React, { Fragment } from "react";
import { useAlert } from "react-alert";
import { store } from 'react-notifications-component';
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
        console.log(decoded)
        localStorage.setItem('user',decoded._id)
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
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.post(baseUrl+"/ticket", body, config)
        console.log(res.data)
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