import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook, BsTwitter} from 'react-icons/bs'

function SignUp() {
  return (
    <section className='text-center svgfh'>
      <h1 className='text-big'>Unknown</h1>

      <section className='body-signup mt-5'>
        <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="" id="" placeholder='Enter your email' />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="" id="" placeholder='Enter your password' />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm password</label>
          <input type="password" name="" id="" placeholder='Retype your password' />
        </div>
        <div>
          <button className='submit-btn'>Submit</button>
        </div>
        </form>
      </section>
      
      <section className='body-signup-2'>
        <h2 className='capitalize'>sign up with</h2>
        <div className='flex'>
          <FcGoogle />
          <BsFacebook />
          <BsTwitter />
        </div>
      </section>
    </section>
  )
}

export default SignUp