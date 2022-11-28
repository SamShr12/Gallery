import React from 'react'
import { BsBellFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import test from '../../../image/test.jpg'
function AdminNav() {
  return (
    <section>
         <nav>
    <header className='navheader'>
      <div className='logo-nav'>
        <Link to="/">
          {/* <img src={test} alt="" className='logo-merchant'/> */}
          Logo
        </Link>
      </div>

      <div className='active-nvabar'>
        <Link to="/admin/dashboard" className='linkofthenav'>Dashboard</Link>
        <Link to="/admin/create" className='linkofthenav'>Create</Link>
        <BsBellFill className='text-xl mt-1 linkofthenav cursor-pointer'/>
          <img src={test} alt="" className='profile-nav-img'/>
      </div>
    </header>
  </nav>
    </section>
  )
}

export default AdminNav