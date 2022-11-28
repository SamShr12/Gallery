import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Req/Nav'

function Login() {
  return (
    <section className='svgfh'>
      <h1 className='text-xl font-bold mb-5'>Login</h1>
      <section className='login-text-input'>
          <div className='mb-5'>
            <div className='mb-1'>
            <label htmlFor="email">Email: </label>
            </div>
            <input type="email" name="" id="" placeholder='Enter your email' autoFocus required/>
          </div>
          <div>
            <div className='mb-1'>
              <label htmlFor="password">Password: </label>
            </div>
            <input type="password" name="" id="" placeholder='Enter your password' required/>
          </div>
          <div className='mt-5'>
            <button className='submit-btn w-full'>Submit</button>
          </div>
          
          <div className='mt-5 text-center'>
            <h2 className='font-base'>Dont have a account ? <Link to={`/signup`}><strong className='text-[#47baef] font-base'>Register</strong></Link></h2>
          </div>
      </section>
    </section>
  )
}

export default Login