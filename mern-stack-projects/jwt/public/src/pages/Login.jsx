import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const generateError = (err) => { 
    toast.error(err, {
      position: "bottom-right",
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming 'values' is an object containing user registration data
      const { data } = await axios.post('http://localhost:4000/login', { ...values }, {
        withCredentials: true,
      });

      // You can use 'data' here to handle the response from the server
      console.log('Registration successful:', data);
      if (data) {
        if (data.errors) {
          // Handle errors
          const {email, password} = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      // Handle errors, such as network issues or server errors
      console.error('Error during registration:', err);
    }
  };

  return (
    <div className='container'>
        <h2>Login</h2>
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
            <span>Already have an account? <Link to='/Register'>Register</Link></span>
        </Form>
        <ToastContainer />
    </div>
  )
}

export default Login