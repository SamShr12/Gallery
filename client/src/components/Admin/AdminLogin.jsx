import React from 'react'

function AdminLogin() {
  return (
    <section className='svgfh'>
        <h2 className='text-[#47baef] font-bold text-2xl'>Login</h2>
        <div className='my-5 ad-log-in'>
        <input type="text" name="" id="" placeholder='Enter your email..' autoFocus required />
        </div>
        <div className='ad-log-in'>
        <input type="text" name="" id="" placeholder='Enter your password...' required/>
        </div>
        <div className='mt-5'>
          <button className='submit-btn w-full'>Submit</button>
        </div>
    </section>
  )
}

export default AdminLogin