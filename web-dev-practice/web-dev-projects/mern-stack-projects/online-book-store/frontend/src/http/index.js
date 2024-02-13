import axios from 'axios'


const API = axios.create({
    baseURL : "http://localhost:8000/",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
        
    }
})

const APIAuthenticated = axios.create({
    baseURL : "http://localhost:8000/",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
        
    }
})

const APIAdminApiAuthentication = axios.create({
    baseURL : "http://localhost:8000/",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
        
    }
})



export  {API, APIAdminApiAuthentication, APIAuthenticated}