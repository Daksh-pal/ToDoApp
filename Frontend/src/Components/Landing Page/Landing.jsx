import React, { useEffect } from 'react'
import './Landing.css'
import {gsap} from 'gsap';
import { Link } from 'react-router-dom'

const Landing = () => {

    useEffect(() => {
        gsap.fromTo(
            '.container',
                {opacity :0 , scale: 0.8},
                { opacity: 1, scale:1, duration: 1, ease: 'bounce' }            
        );

        gsap.fromTo(
            '.start',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'bounce' }
          );
    },[])

  return (
    <div className='container'>
        <h1>Welcome to the To Do App</h1>
        <Link className='start' to='/register'>Start your journey here...</Link>
    </div>
  )
}

export default Landing