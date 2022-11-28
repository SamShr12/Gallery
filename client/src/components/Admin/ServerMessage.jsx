import React from 'react'
import AdminNav from './AdminNav'

function ServerMessage() {
  return (
    <section>
        <AdminNav />
        <section className='w-80'>
            <div className='svgfh'>
                <h2 className='text-2xl font-bold'>Server Message</h2>
                <div className='sllddss'>
                    <input type="text" name="" id="" placeholder='Title*' />
                </div>
                <div className='sllddss'>
                    <textarea type="text" name="" id="" placeholder='Your Message*'/>
                </div>
                <div className='text-center'>
                    <button className='submit-btn mt-2'>Submit</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default ServerMessage