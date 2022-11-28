import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'

function AdminCreate() {
  return (
    <section>
        <AdminNav />
        <section className='w-80'>
          <div className='grid-2'>
            <Link to={`/admin/create/servermessage`}>
            <div className='vsdcssdaa'>
              <div className='border-things'>
              <h2 className='text-center mt-24 text-xl font-bold'>Create a server message</h2>
              </div>
            </div>
            </Link>
            <Link to={`/admin/create/post`}>
            <div className='vsdcssdaa text-right'>
              <div className='border-things'>
              <h2 className='text-center mt-24 text-xl font-bold'>Create a post</h2>
              </div>
            </div>
            </Link>
          </div>
        </section>
    </section>
  )
}

export default AdminCreate