import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password}) 

//passing the data with the url and variables
    .then(result => console.log(result)) //showing the result
    navigate('/login') //there is an error with this navigating part
    .catch(err => console.log(err)) //if there is an error the ndisplays
  }

  return (
    <div className='content'>
    <div className='form-content'>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    
    <div className='form-fields'>
    <label>Name</label>
    <input
       type="text"
       placeholder='Enter name?'
       autoComplete='off'
       name='name' 
       onChange={(e)=>setName(e.target.value)}
    />
    </div>

    <div className='form-fields'>
    <label>Email</label>
    <input 
      type='text'
      placeholder='Enter email?'
      name='email'
      onChange={(e)=>setEmail(e.target.value)}
    />
    </div>

    <div className='form-fields'>
    <label>Password</label>
    <input 
       type='text'
       placeholder='Enter Password?'
       name='password'
       onChange={(e)=>setPassword(e.target.value)}
    />
    </div>

    <button type='submit' className='form-btn'>
        Register
    </button> 
    </form>
    <p>Already Have an Account?</p>
    <Link to='/login'>
        Login
    </Link>
    </div>
    </div>
  )
}

export default Register;
