import React from 'react'
import { BsAlarm } from 'react-icons/bs'
import AdminNav from './AdminNav'

function Dashboard() {
  return (
    <section>
      <AdminNav />

      <section className='w-80'>
        <h2 className='font-bold text-3xl mt-10 uppercase'>Dashboard</h2>
        <div className='grid-3'>
          <div className='bs-admin'>
            <div className="p-10">
              <div className='work-flex w-full'>
              <h2 className='text-3xl font-bold '>Post</h2>
                <BsAlarm className='text-4xl ml-24 margin-left-120' style={{fontWeight:"900"}}/>
              </div>
              <p className='my-10 text-2xl font-bold'>120</p>
            </div>
          </div>
          <div className='bs-admin'>
            <div className="p-10">
              <div className='work-flex w-full' style={{}}>
              <h2 className='text-3xl font-bold'>User</h2>
                <BsAlarm className='text-4xl margin-left-120' style={{fontWeight:"900"}}/>
              </div>
              <p className='my-10 text-2xl font-bold '>120</p>
            </div>
          </div>
          <div className='bs-admin'>
            <div className="p-10">
              <div className='work-flex w-full'>
              <h2 className='text-3xl font-bold'>Active User</h2>
                <BsAlarm className='text-4xl margin-left-120' style={{fontWeight:"900"}}/>
              </div>
              <p className='my-10 text-2xl font-bold '>120</p>
            </div>
          </div>
        </div>

        <div className='grid-2'>
          <div></div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard