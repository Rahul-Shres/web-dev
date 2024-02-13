import axios from 'axios'




const APIAuthenticated = axios.create({
    baseURL : "http://localhost:8000/",
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json',
        'Authorization' : `${localStorage.getItem('token')}`
        
    }
})



export  {APIAuthenticated}