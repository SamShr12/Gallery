import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook, BsTwitter} from 'react-icons/bs'

function SignUp() {
  return (
    <section className='svgfh'>
      <h1 className='text-xl font-bold mb-5'>Sign Up</h1>

      <section className='body-signup mt-5'>
        <form>
        <div className='mb-5'>
          <div className='mb-1'>
          <label htmlFor="email">Username:</label>
          </div>
          <input type="text" name="" id="" placeholder='Enter your email' autoFocus />
        </div>
        <div className=''>
          <div className='mb-1'>
          <label htmlFor="email">Email:</label>
          </div>
          <input type="email" name="" id="" placeholder='Enter your email' required />
        </div>
        <div className='my-5'>
          <div className='mb-1'>
            <label htmlFor="password">Password:</label>
          </div>
          <input type="password" name="" id="" placeholder='Enter your password' required/>
        </div>
        <div className='mb-5'>
          <div className='mb-1'>
            <label htmlFor="confirm_password">Confirm password</label>
          </div>
          <input type="password" name="" id="" placeholder='Retype your password' required />
        </div>
        <div>
          <button className='submit-btn w-full'>Submit</button>
        </div>
        </form>
      </section>
      
      <section className='body-signup-2 '>
        <h2 className='capitalize mt-5 text-center font-semibold text-lg'>sign up with</h2>
        <div className='text-center flex margin-auto gap-5'>
          <FcGoogle className='text-3xl cursor-pointer'/>
          <BsFacebook className='text-3xl cursor-pointer'/>
          <BsTwitter className='text-3xl cursor-pointer'/>
        </div>
      </section>
    </section>
  )
}

export default SignUp