import React from 'react'
import {Link} from 'react-router-dom'
import test from '../../../image/test.jpg'
function Nav() {
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
        <Link to="/" className='linkofthenav'>Home</Link>
        <Link to="/explore" className='linkofthenav'>Explore</Link>
        <Link to="/post" className='linkofthenav'>Post</Link>
        {/* <Link to={`/profile`}><img src="" alt="" className='profilecontext' /></Link> */}
        <Link to={`/profile`}>Samyam</Link>
      </div>
    </header>
  </nav>
  )
}

export default Nav