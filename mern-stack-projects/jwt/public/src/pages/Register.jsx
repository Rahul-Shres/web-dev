import React, { useState} from 'react'
import { Link} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
    };
  return (
    <div className='container'>
        <h2>Register Account</h2>
        <Form onSubmit={(e) => handleSubmit(e)}> 
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='email'
                onChange={(e) => 
                setValues({ ...values, [e.target.name]: e.target.value})} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='Password'
                onChange={(e) => 
                    setValues({ ...values, [e.target.name]: e.target.value})} 
                 />
            </div>
            <button type='submit'>Submit</button>
            <span>Already have an account? <Link to='/login'>Log in</Link></span>
        </Form>
        <ToastContainer />
    </div>
  )
}

export default Register