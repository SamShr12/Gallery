import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <section className='text-center svgfh'>
      <h1 className='text-big'>Login</h1>
      <section>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="" id="" placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="" id="" placeholder='Enter your password' />
          </div>
          <div>
            <button className='submit-btn'>Submit</button>
          </div>
          
          <div>
            <h2>Dont have a account? <Link to={`/signup`}>Register</Link></h2>
          </div>
      </section>
    </section>
  )
}

export default Login