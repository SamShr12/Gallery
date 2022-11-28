import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import test from '../../../image/testprofileimage.png'
import {BsBellFill} from 'react-icons/bs'
function Nav() {
  const [toggle, settoggle] = useState(false)
  return (
    <nav>
    <header className='navheader'>
      <div className='logo-nav'>
        <Link to="/">
          {/* <img src={test} alt="" className='logo-merchant'/> */}
          Logo
        </Link>
      </div>

      <div className='active-nvabar'>
      <div className=''>
          <input type="text" name="" id="" placeholder='Search...' className='searchinput' />
        </div>
        <Link to="/explore" className='linkofthenav'>Explore</Link>
        <Link to="/post" className='linkofthenav'>Post</Link>
        <BsBellFill className='text-xl mt-1 linkofthenav cursor-pointer'/>
        <Link to={`/profile/testuser`}>
          <img src={test} alt="" className='profile-nav-img'/>
        </Link>
      </div>
    </header>
  </nav>
  )
}

export default Nav