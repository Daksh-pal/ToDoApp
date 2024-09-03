import React, { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Register = () => {

  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/user/register',{
      username,
      password
    })
    console.log("Fine till submit");
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