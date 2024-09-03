import React, { useEffect } from 'react'
import './Login.css'
import {gsap} from 'gsap';
import { Link } from 'react-router-dom'

const Login = () => {

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
        <div className='input'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
        </div>
        <p>Don't have an account.<Link to='/register'>Register</Link></p>
        <button className='btn'>Login</button>
    </div>
  )
}

export default Login