import React, { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {

  const navigate = useNavigate();

  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/user/register',{
        username,
        password
      })
      navigate('/login');
      toast.success("Successfully Registered")
    } catch (error) {
      toast.error("Registration failed " + error.response?.data?.message || error.message);
    }

  }

  useEffect(() => {
    gsap.fromTo(
      '.outer',
      {opacity :0 , y:100},
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }  
    )
  },[])



  return (
    <div className='outer'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='input'>
            <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
        <button className='btn'>Register</button>
        </form>
        <p>Already have an account.<Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Register