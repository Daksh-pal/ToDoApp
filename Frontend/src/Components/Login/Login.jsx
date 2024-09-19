import React, { useEffect, useState } from 'react'
import './Login.css'
import {gsap} from 'gsap';
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/login' , {
        username,
        password
      })
      localStorage.setItem('token' , response.data.token);
      console.log(response);
  
      navigate('/allTasks');
      toast.success("Successfully logged in");
    
    } catch (error) {
      console.log(error);
      toast.error("Unauthorized Acess")
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
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className='input'>
            <input type="text" placeholder='Username' onChange={e=>setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
            <button className='btn'>Login</button>
        </form>
        <p>Don't have an account.<Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Login;