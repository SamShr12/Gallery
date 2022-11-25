import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import test from '../../../image/test.jpg'
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

        <div className='my-5'>
          <input type="text" name="" id="" placeholder='Search...' />
        </div>
        
      <div className='active-nvabar'>
        <Link to="/explore" className='linkofthenav'>Explore</Link>
        <Link to="/post" className='linkofthenav'>Post</Link>
        <BsBellFill className='text-xl mt-1 linkofthenav'/>
        <Link to={`/profile/random`} className='linkofthenav'>Samyam</Link>
      </div>
    </header>
  </nav>
  )
}

export default Nav