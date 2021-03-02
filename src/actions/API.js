import axios from 'axios'

export const register = async (value) => {
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.post("http://localhost:4000/api/user", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const authenticate = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post("http://localhost:4000/api/user/signin", body, config)
        console.log(res.data)
        localStorage.setItem('token',res.data.token)
    }
    catch (err) {
        alert(err.response.data)
        console.log(err.response.data)
    }
}
export const changePassword = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.post("http://localhost:4000/api/user/account", body, config)
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
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.get("http://localhost:4000/api/user", body, config)
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
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.post("http://localhost:4000/api/ticket", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getTicket = async (value) =>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.get("http://localhost:4000/api/ticket", body, config)
        console.log(res.data)
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
            'Authorization': `${localStorage.getItem('token')}` 
        }
    }
    try {
        const res = await axios.put("http://localhost:4000/api/ticket", body, config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}